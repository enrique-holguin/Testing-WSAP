//Inyección de dependencias User
const { UserRepository } = require("../api/User/repositories/UserRepository");
const { UserService } = require("../api/User/services/UserService");

const repository = new UserRepository();
const userService = new UserService(repository);

module.exports = { userService };
