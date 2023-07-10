const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");

const flowMain = addKeyword(EVENTS.WELCOME).addAnswer("Bienvenido");

module.exports = flowMain;
