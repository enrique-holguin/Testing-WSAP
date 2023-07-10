const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");

//Servicios y Repistorios
const { UserRepository } = require("../api/User/repositories/UserRepository");
const { UserService } = require("../api/User/services/UserService");

//Inyección de dependencias
const userRepository = new UserRepository();
const userService = new UserService(userRepository);

//Mensajes
const { messages } = require("../utils/messages/flowMain");

const flowMain = addKeyword(EVENTS.WELCOME).addAction(
  async (ctx, { flowDynamic, endFlow, gotoFlow }) => {
    const { from: phone, pushName: defaultName } = ctx;
    const user = userService.getUser(phone);
    if (!user) {
      await flowDynamic(messages.welcome(defaultName));
    }
    await flowDynamic(messages.welcome(user.name));
  }
);

module.exports = { flowMain };
