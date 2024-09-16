const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const cors = require('cors');


// Middleware para parsing de JSON
app.use(express.json());
app.use(cors());

// Usar as rotas de autenticação
app.use('/auth', authRoutes);
app.use('/blog', blogRoutes);

// Definir a porta e iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});