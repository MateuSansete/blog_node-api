// controllers/authController.js

exports.login = (req, res) => {
    const { username, password } = req.body;
  
    // Apenas um exemplo simples de autenticação
    if (username === 'admin' && password === '123456') {
      res.status(200).send({ message: 'Login realizado com sucesso!' });
    } else {
      res.status(401).send({ message: 'Credenciais inválidas!' });
    }
};