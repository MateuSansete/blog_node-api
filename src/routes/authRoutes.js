const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController'); // Importa a instância da classe AuthController
const authController = new  AuthController()


// Define a rota de login
router.post('/login', authController.login.bind(authController));

module.exports = router;
