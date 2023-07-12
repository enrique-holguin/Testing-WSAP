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
    `1️⃣ - 🏢 ¿Quiénes somos?`,
    `2️⃣ - 📊 Estadísticas`,
    `3️⃣ - 🧑 Contáctenos`,
    `4️⃣ - 📝 Registrarse`,
  ],
});

module.exports = { messages };
