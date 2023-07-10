//@ts-check

const User = require("../models/User");
const { UserRepository } = require("../repositories/UserRepository");

class UserService {
  /**
   *
   * @param {UserRepository} userRepository
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  /**
   *
   * @param {number} phone
   */
  getUser(phone) {
    return this.userRepository.getUser(phone);
  }

  /**
   *
   * @param {User} user
   */
  saveUser(user) {
    this.userRepository.saveUser(user);
  }
}

module.exports = { UserService };
