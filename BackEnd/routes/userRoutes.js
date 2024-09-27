const express = require("express");
const {
  registerUser,
  loginUser,
  getUserByEmail,
  updateProfile,
} = require("../Controller/userController");
const router = express.Router();

// Rutas para registrar y loguear
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/infoProfileByEmail", getUserByEmail);
router.put("/updateProfile", updateProfile);

module.exports = router;
