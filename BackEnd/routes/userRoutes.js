const express = require("express");
const {
  registerUser,
  loginUser,
  getUserByEmail,
  updateProfile,
  sendVerificationEmail,
  changePassword,
  infoPrivacyByEmail,
  confirmarCodigo,
} = require("../Controller/userController");
const router = express.Router();

// Rutas para registrar y loguear
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/infoProfileByEmail", getUserByEmail);
router.put("/updateProfile", updateProfile);
router.post("/VerifyEmail", sendVerificationEmail);
router.post("/changePassword", changePassword);
router.post("/infoPrivacyByEmail", infoPrivacyByEmail);
router.post("/confirmarCodigo", confirmarCodigo);
module.exports = router;
