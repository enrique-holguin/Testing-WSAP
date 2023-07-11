const { nameCompany } = require("../constants/company");
const flowsKeywords = require("../constants/flowKeywords");

const messages = Object.freeze({
  /**
   * @param {string} name
   */
  welcome(name) {
    return `¡Hola ${name}! ¡Bienvenido(a) a ${nameCompany}! 😊👋`;
  },
  instructions:
    "Escriba el *Número* que corresponda a la opción que desea elegir",
  menu: [
    `*1* - 🏢 ¿Quiénes somos?`,
    `*2* - 📊 Estadísticas`,
    `*${flowsKeywords.formKeyword}* - 🧑 Contáctenos`,
    `*${flowsKeywords.registerKeyword}* - 📝 Registrarse`,
  ],
});

module.exports = { messages };
