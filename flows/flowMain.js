const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");

//Inyección de dependencias User
const { userService } = require("../containers/container");

//Mensajes
const { messages } = require("../utils/messages/flowMain");

const flowMain = addKeyword(EVENTS.WELCOME).addAction(
  async (ctx, { flowDynamic, endFlow, gotoFlow }) => {
    const { from: phone, pushName } = ctx;
    console.log(typeof phone);
    const user = userService.getUser(phone);
    const name = user ? user.name : pushName;
    await flowDynamic(messages.welcome(name));
    return;
  }
);

module.exports = { flowMain };
