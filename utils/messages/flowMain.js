const { nameCompany } = require("../constants/company");

const messages = Object.freeze({
  /**
   * @param {string} name
   */
  welcome(name) {
    return `¡Hola ${name}! ¡Bienvenido(a) a Codenium! 😊👋`;
  },
  instructions:
    "Escriba el *Número* que corresponda a la opción que desea elegir",
  menu: [
    "*1* - 🏢 ¿Quienes somos?",
    "*2* - 📊 Estadísticas",
    "*3* - 🧑 Contáctenos",
    "*4* - 📝 Registrarse",
  ],
});

module.exports = { messages };
