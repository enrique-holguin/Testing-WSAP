const { addKeyword } = require("@bot-whatsapp/bot");

//Inyección de dependencias User
const { userService } = require("../containers/container");

//Mensajes
const { messages } = require("../utils/messages/flowForm");

const flowForm = addKeyword("form").addAction(
  async (ctx, { flowDynamic, endFlow, gotoFlow }) => {
    const { from: phone } = ctx;
    const user = userService.getUser(phone);
    return user
      ? await flowDynamic(messages.authorize(user))
      : await endFlow(messages.authorize(user));
  }
);

module.exports = { flowForm };
