// models/userModel.js

// Exemplo de model com um usuário 
const users = [
    {
      id: 1,
      username: 'Mateus',
      password: '12345',
    },
];
  
exports.findUserByUsername = (username) => {
    return users.find((user) => user.username === username);
};
  