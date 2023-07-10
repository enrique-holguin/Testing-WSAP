const User = require("../../api/User/models/User");

const messages = Object.freeze({
  /**
   * @param {User | null} user
   */
  userExists(user) {
    return user
      ? `⚠️ ${user.name} ya estás registrado`
      : `✍️ Ahora le pediremos algunos datos \n*Por favor siga las indicaciones*`;
  },
  salir: `🔔 Recuerde que puede cancelar la operación en cualquier momento escribiendo \n*Salir*`,
});

module.exports = { messages };
