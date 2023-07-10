const User = require("../../api/User/models/User");

const messages = Object.freeze({
  /**
   * @param {User} user
   */
  userExists(user) {
    return user
      ? `⚠️ ${user.name} ya estás registrado`
      : `✍️ Ahora le pediremos algunos datos \n*Por favor siga las indicaciones*`;
  },
});

module.exports = { messages };
