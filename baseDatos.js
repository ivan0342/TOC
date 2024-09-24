const sqlite = require("sqlite3");
let sql = "";

const db = new sqlite.Database("./data.db", sqlite.OPEN_READWRITE, (error) => {
  if (error) {
    console.error(error);
  }
});

// sql = `CREATE TABLE IF NOT EXISTS usuarios (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name VARCHAR(100) NOT NULL,
//         apellido VARCHAR(100) NOT NULL)`;

// db.run(sql, (error) => {
//   if (error) {
//     console.error(error);
//   }
// });

// sql = `INSERT INTO usuarios (name, apellido) VALUES (?, ?)`;

// db.run(sql, ["Jose", "Covarrubias"], (error) => {
//   if (error) {
//     console.error(error);
//   }
// });

// sql = `UPDATE usuarios SET name = ? WHERE id = ?`;

// db.run(sql, ["Jesus", 1], (error) => {
//   if (error) {
//     console.error(error);
//   }
// });

sql = `DELETE FROM usuarios WHERE id = ?`;

db.run(sql, [1], (error) => {
  if (error) {
    console.error(error);
  }
});
