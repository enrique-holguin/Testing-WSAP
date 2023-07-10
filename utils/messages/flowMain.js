const messages = Object.freeze({
  /**
   * @param {string} name
   */
  welcome(name) {
    return `🤗 Bienvenido ${name}!`;
  },
});

module.exports = { messages };
