const { addKeyword } = require("@bot-whatsapp/bot");

//Inyección de dependencias User
const { userService } = require("../containers/userContainer");

//Mensajes
const { messages } = require("../utils/messages/flowForm");

//Constantes
const { formKeyword } = require("../utils/constants/flowKeywords");

//flows
const { flowRegister } = require("./flowRegister");

const flowForm = addKeyword(formKeyword).addAction(
  async (ctx, { flowDynamic, endFlow, gotoFlow }) => {
    const { from: phone } = ctx;
    const user = userService.getUser(phone);
    if (!user) {
      return await gotoFlow(flowRegister);
    }
    await flowDynamic(messages.authorize(user));
    return;
  }
);

module.exports = { flowForm };
