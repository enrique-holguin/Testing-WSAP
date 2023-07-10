const { addKeyword } = require("@bot-whatsapp/bot");

//Servicios y Repistorios
const { UserRepository } = require("../api/User/repositories/UserRepository");
const { UserService } = require("../api/User/services/UserService");

//Inyección de dependencias
const userRepository = new UserRepository();
const userService = new UserService(userRepository);

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
