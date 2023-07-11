const { addKeyword } = require("@bot-whatsapp/bot");

//Inyección de dependencias User
const { userService } = require("../containers/userContainer");

//Mensajes
const { messages } = require("../utils/messages/flowForm");

//Constantes
const { formKeyword } = require("../utils/constants/flowKeywords");
const { delay } = require("@adiwajshing/baileys");

//flows
const { flowRegister } = require("./flowRegister");

const flowForm = addKeyword(formKeyword, { sensitive: true })
  .addAction(async (ctx, { flowDynamic, endFlow, gotoFlow }) => {
    const { from: phone } = ctx;
    const user = userService.getUser(phone);
    if (!user) {
      await flowDynamic(messages.notRegistered);
      await delay(600);
      return await gotoFlow(flowRegister);
    }
    await flowDynamic(messages.authorize(user));
    return;
  })
  .addAnswer(
    "Escriba el asunto",
    { capture: true, delay: 600 },
    async (ctx, { fallBack, flowDynamic, endFlow }) => {
      const { from: phone, body: asunto } = ctx;
      
    }
  );

module.exports = { flowForm };
