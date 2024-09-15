// models/userModel.js

// Exemplo de model com um usuário fictício
const users = [
    {
      id: 1,
      username: 'admin',
      password: '123456',
    },
];
  
exports.findUserByUsername = (username) => {
    return users.find((user) => user.username === username);
};
  