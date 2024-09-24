const bcrypt = require('bcrypt');
const db = require('../database/db');

// Registro de usuarios
const registerUser = async (req, res) => {
    const { name, apellidos, email, contraseña, confirmarContraseña, fechaNacimiento } = req.body;

    if (contraseña !== confirmarContraseña) {
        return res.status(400).json({ error: 'Las contraseñas no coinciden' });
    }

    const hashedPassword = await bcrypt.hash(contraseña, 10);

    const sqlInsert = `INSERT INTO users (name, apellidos, email, contraseña, fecha_nacimiento) VALUES (?, ?, ?, ?, ?)`;

    db.run(sqlInsert, [name, apellidos, email, hashedPassword, fechaNacimiento], (error) => {
        if (error) {
            return res.status(500).json({ error: 'Error al registrar el usuario' });
        }
        res.status(200).json({ message: 'Usuario registrado exitosamente' });
    });
};

// Login de usuarios
const loginUser = (req, res) => {
    const { email, contraseña } = req.body;

    const sqlSelect = `SELECT * FROM users WHERE email = ?`;
    db.get(sqlSelect, [email], async (error, user) => {
        if (error) {
            return res.status(500).json({ error: 'Error del servidor' });
        }

        if (!user) {
            return res.status(400).json({ error: 'Usuario no encontrado' });
        }

        const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Contraseña incorrecta' });
        }

        res.status(200).json({ message: 'Inicio de sesión exitoso' });
    });
};

module.exports = { registerUser, loginUser };
