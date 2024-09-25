const sqlite = require('sqlite3');
const path = require('path');

// Usar una ruta absoluta
const dbPath = path.resolve(__dirname, '../data.db');

const db = new sqlite.Database(dbPath, sqlite.OPEN_READWRITE, (error) => {
    if (error) {
        console.error('Error al conectar con la base de datos:', error);
    } else {
        console.log('Conectado a la base de datos.');
    }
});

module.exports = db;
