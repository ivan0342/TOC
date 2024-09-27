const bcrypt = require("bcrypt");
const db = require("../database/db");

// Registro de usuarios
const registerUser = async (req, res) => {
  const {
    name,
    apellidos,
    email,
    contraseña,
    confirmarContraseña,
    fechaNacimiento,
  } = req.body;

  if (contraseña !== confirmarContraseña) {
    return res.status(400).json({ error: "Las contraseñas no coinciden" });
  }

  const hashedPassword = await bcrypt.hash(contraseña, 10);

  const sqlInsert = `INSERT INTO users (name, apellidos, email, contraseña, fecha_nacimiento) VALUES (?, ?, ?, ?, ?)`;

  db.run(
    sqlInsert,
    [name, apellidos, email, hashedPassword, fechaNacimiento],
    (error) => {
      if (error) {
        return res.status(500).json({ error: "Error al registrar el usuario" });
      }
      res.status(200).json({ message: "Usuario registrado exitosamente" });
    }
  );
};

// Login de usuarios
const loginUser = (req, res) => {
  const { email, contraseña } = req.body;

  console.log("EEEEO");
  const sqlSelect = `SELECT * FROM users WHERE email = ?`;
  db.get(sqlSelect, [email], async (error, user) => {
    if (error) {
      return res.status(500).json({ error: "Error del servidor" });
    }

    if (!user) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }

    res
      .status(200)
      .json({ message: "Entraste al endpoint de login", email: user.email });
  });
};

// Ejemplo de un endpoint en el backend para obtener los datos de un usuario
const getUserById = (req, res) => {
  const { userId } = req.params; // El userId puede venir del token de autenticación o de la solicitud
  const sqlSelect = `SELECT name, apellidos, fecha_nacimiento FROM users WHERE id = ?`;

  db.get(sqlSelect, [userId], (error, user) => {
    if (error) {
      return res.status(500).json({ error: "Error del servidor" });
    }

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json(user);
  });
};

const getUserByEmail = (req, res) => {
  const { email } = req.body; // Obtener el email desde el cuerpo de la solicitud
  console.log("Entre a userbyemail");
  const sqlSelect = `SELECT name, apellidos, fecha_nacimiento, profile_image FROM users WHERE email = ?`; // Agregar profile_image

  db.get(sqlSelect, [email], (error, user) => {
    if (error) {
      return res.status(500).json({ error: "Error del servidor" });
    }

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json(user); // Devolver el usuario con la URI de la imagen
  });
};

// Actualizar perfil de usuario
const updateProfile = (req, res) => {
  console.log("ENTRE A UPDATE");
  const { email, name, apellidos, profile_image } = req.body;
  console.log({ profile_image });

  const sqlUpdate = `UPDATE users SET name = ?, apellidos = ?, profile_image = ? WHERE email = ?`;

  db.run(sqlUpdate, [name, apellidos, profile_image, email], (error) => {
    if (error) {
      return res.status(500).json({ error: "Error al actualizar el perfil" });
    }
    res.status(200).json({ message: "Perfil actualizado exitosamente" });
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUserByEmail,
  updateProfile,
};
