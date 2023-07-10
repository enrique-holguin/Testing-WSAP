//@ts-check

const { users } = require("../data/mockUser");
const User = require("../models/User");

class UserRepository {
  /**
   * @param {number} phone
   * @returns {User | false}
   */
  getUser(phone) {
    const user = users[phone];
    return user ?? false;
  }

  /**
   * @param {User} user
   */
  saveUser(user) {
    if (this.getUser(user.phone)) {
      throw new Error("Phone already exists!");
    }
    // Save the data to database or file system here...
    users[user.phone] = { ...user };
    console.log("User Saved");
  }
}

module.exports = { UserRepository };
