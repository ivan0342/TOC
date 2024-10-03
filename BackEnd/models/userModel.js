const db = require("../database/db");

const createUserTable = () => {
  const sqlCreateTable = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(100),
        apellidos VARCHAR(100),
        email VARCHAR(100),
        contraseña VARCHAR(100),
        fecha_nacimiento DATE,
        verification_code VARCHAR(6),
        verification_code_expiration DATETIME
    );`;

  db.run(sqlCreateTable, (error) => {
    if (error) {
      console.error("Error al crear la tabla de usuarios:", error);
    }
  });
};

module.exports = { createUserTable };
