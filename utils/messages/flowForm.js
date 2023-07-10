const User = require("../../api/User/models/User");

const messages = Object.freeze({
  //función que retorna un mensaje si autoriza al usuario o no
  /**
   * @param {User} user
   */
  authorize(user) {
    return user
      ? `👋 Muy buenas *${user.name}* \n🙌 Por favor siga las indicaciones para compeltar el formulario`
      : `Lo sentimos \n🚫 Área solo para usuarios registrados`;
  },
});

module.exports = { messages };
