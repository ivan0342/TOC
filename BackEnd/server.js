const express = require('express');
const userRoutes = require('./routes/userRoutes');
const { createUserTable } = require('./models/userModel');
const cors = require('cors'); // Para permitir el acceso entre frontend y backend

const app = express();
app.use(express.json());
app.use(cors());

// Crear la tabla de usuarios
createUserTable();

// Usar las rutas
app.use('/api/users', userRoutes);

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
