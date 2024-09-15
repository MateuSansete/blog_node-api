const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Importa a instância da classe AuthController

// Define a rota de login
router.post('/login', authController.login.bind(authController));

module.exports = router;
