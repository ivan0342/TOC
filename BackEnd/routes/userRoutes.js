const express = require('express');
const { registerUser, loginUser, sendVerificationEmail, changePassword,infoPrivacyByEmail } = require('../Controller/userController');
const router = express.Router();

// Rutas para registrar y loguear
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/VerifyEmail', sendVerificationEmail);
router.post('/changePassword',changePassword)
router.post('/infoPrivacyByEmail',infoPrivacyByEmail)



module.exports = router;