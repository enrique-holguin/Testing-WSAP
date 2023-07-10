//@ts-check

const User = require("../models/User");
const { mockDataUsers } = require("./mockData");

//Objeto global donde se almacen los usuarios
/**
 * @type {{[key:number]:User}}
 */
const users = {};

// Recorremos los datos de usuarios y los agregamos al objeto 'users'
mockDataUsers.forEach((userData) => {
  const { phone } = userData;
  users[phone] = { ...userData };
});

module.exports = { users };
