const messages = Object.freeze({
  /**
   * @param {string} name
   */
  welcome(name) {
    return `🤗 Bienvenido ${name}!`;
  },
  instructions:
    "Escriba el *Número* que corresponda a la opción que desea elegir",
  menu: [
    "*1* - 🏢 ¿Quienes somos?",
    "*2* - 📊 Estadísticas",
    "*3* - 📝 Registrarse",
    "*4* - 🧑 Contáctenos",
  ],
});

module.exports = { messages };
