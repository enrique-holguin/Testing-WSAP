const { addKeyword } = require("@bot-whatsapp/bot");

//Inyección de dependencias User
const { userService } = require("../containers/userContainer");

//Mensajes
const { messages } = require("../utils/messages/flowForm");

//Constantes
const { formKeyword } = require("../utils/constants/flowKeywords");

const flowForm = addKeyword(formKeyword).addAction(
  async (ctx, { flowDynamic, endFlow, gotoFlow }) => {
    const { from: phone } = ctx;
    const user = userService.getUser(phone);
    return user
      ? await flowDynamic(messages.authorize(user))
      : await endFlow(messages.authorize(user));
  }
);

module.exports = { flowForm };
