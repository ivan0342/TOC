const express = require("express");
const {
  registerUser,
  loginUser,
  getUserByEmail,
} = require("../Controller/userController");
const router = express.Router();

// Rutas para registrar y loguear
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/infoProfileByEmail", getUserByEmail);

module.exports = router;
