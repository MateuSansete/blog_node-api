class AuthController {
  async login(req, res) {
    const { username, password } = req.body;

    // Apenas um exemplo simples de autenticação
    if (username === 'Mateus' && password === '123456') {
      res.status(200).send({ message: 'Login realizado com sucesso!' });
    } else {
      res.status(401).send({ message: 'Credenciais inválidas!' });
    }
  }
}

module.exports = new AuthController();
