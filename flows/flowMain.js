const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");

//Inyección de dependencias User
const { userService } = require("../containers/userContainer");

//Mensajes
const { messages } = require("../utils/messages/flowMain");

//Constantes
const { delay } = require("@adiwajshing/baileys");

const flowMain = addKeyword(EVENTS.WELCOME)
  .addAction(async (ctx, { flowDynamic, endFlow, gotoFlow }) => {
    const { from: phone, pushName } = ctx;
    const user = userService.getUser(phone);
    const name = user ? user.name : pushName;
    await delay(700);
    await flowDynamic(messages.welcome(name));
    await delay(700);
    await flowDynamic(messages.instructions);
    return;
  })
  .addAnswer(messages.menu, { delay: 500 });

module.exports = { flowMain };
