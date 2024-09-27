const bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');
const db = require('../database/db');

// Registro de usuarios
const registerUser = async (req, res) => {
  const { name, apellidos, email, contraseña, confirmarContraseña, fechaNacimiento } = req.body;

  // Consulta para verificar si el correo ya está registrado
  const sqlSelect = `SELECT email FROM users WHERE email = ?`;
  db.get(sqlSelect, [email], async (error, user) => {
      if (error) {
          return res.status(500).json({ error: 'Error del servidor' });
      }

      // Si el usuario ya existe, devuelve un error
      if (user) {
          console.log("El correo electrónico ya está registrado");
          return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
      }

      // Verificar que las contraseñas coincidan
      if (contraseña !== confirmarContraseña) {
          return res.status(400).json({ error: 'Las contraseñas no coinciden' });
      }

      // Hashear la contraseña
      const hashedPassword = await bcrypt.hash(contraseña, 10);

      // Insertar el nuevo usuario
      const sqlInsert = `INSERT INTO users (name, apellidos, email, contraseña, fecha_nacimiento) VALUES (?, ?, ?, ?, ?)`;
      db.run(sqlInsert, [name, apellidos, email, hashedPassword, fechaNacimiento], (error) => {
          if (error) {
              return res.status(500).json({ error: 'Error al registrar el usuario' });
          }
          res.status(200).json({ message: 'Usuario registrado exitosamente' });
      });
  });
};


// Login de usuarios
const loginUser = (req, res) => {
    const { email, contraseña } = req.body;
    console.log(contraseña);
    const sqlSelect = `SELECT * FROM users WHERE email = ?`;
    db.get(sqlSelect, [email], async (error, user) => {
        if (error) {
          console.log("no iniciaste secion error");
            return res.status(500).json({ error: 'Error del servidor' });
        }

        if (!user) {
            console.log("Usuario no encontrado para el email:", email);
            return res.status(400).json({ error: 'Usuario no encontrado' });
        }

        const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña);
        if (!isPasswordValid) {
           console.log("no iniciaste secion");
            return res.status(400).json({ error: 'Contraseña incorrecta' }); 
        }
        console.log("si iniciaste secion");
        res.status(200).json({ message: 'Inicio de sesión exitoso' });
    });
};

const transporter = nodemailer.createTransport({
    service: 'gmail', // Puedes cambiar esto si no usas Gmail
    auth: {
      user: 'ivan.lsanchez03@gmail.com', // Tu correo
      pass: 'yuzq jsqy obve ewqr'
    }
  });
  
const sendVerificationEmail=(req,res)=>{
    const {randomString,email} =req.body;
    console.log(email);
    console.log(randomString);

    const mailOptions = {
        from: 'ivan.lsanchez03@gmail.com',
        to: email, // Correo del usuario al que le enviarás el código
        subject: 'Código de verificación',
        text: `Tu código de verificación es: ${randomString}` // El cuerpo del mensaje
      };
    
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error enviando el correo:', error);
        } else {
          console.log('Correo enviado: ' + info.response);
        }
      });
   
}

const changePassword = async (req, res) => {
  const { email, newPassword } = req.body;
  console.log("se a actualizado la contraseña correctamente en ",{email})
  try {
    console.log("la contraseña nueva es:",newPassword)
    // Hashear la nueva contraseña
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Actualizar la contraseña en la base de datos
    const sqlUpdate = `UPDATE users SET contraseña = ? WHERE email = ?`;
    
    db.run(sqlUpdate, [hashedPassword, email], (error) => {
      if (error) {
        return res.status(500).json({ success: false, message: 'Error al actualizar la contraseña' });
      }
      res.status(200).json({ success: true, message: 'Contraseña actualizada correctamente' });
    });
    
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error del servidor' });
  }
  
};

const infoPrivacyByEmail = async (req, res) => {
  const { email } = req.body;
  console.log("eamil recibido: ",email);
  console.log("Has entrado a la pantalla de datos privacy");

  const sqlSelect = `SELECT email as email1,contraseña as password FROM users WHERE email = ?`; // Cambié 'password' a 'contraseña'
  db.get(sqlSelect, [email], (error, user) => {
    if (error) {
      return res.status(500).json({ error: "Error del servidor" });
    }

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json(user);
    console.log(user.email1);
    console.log(user.password);
  });
};


module.exports = { registerUser, loginUser, sendVerificationEmail, changePassword,infoPrivacyByEmail};
