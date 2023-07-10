const { mockDataUsers } = require("./mockData");

//Objeto global donde se almacen los usuarios
const users = {};

// Recorremos los datos de usuarios y los agregamos al objeto 'users'
mockDataUsers.forEach((userData) => {
  const { phone, ...userInfo } = userData;
  users[phone] = userInfo;
});

module.exports = { users };
