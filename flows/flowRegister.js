const { addKeyword } = require("@bot-whatsapp/bot");

//Inyección de dependencias User
const { userService } = require("../containers/container");

const flowRegister = addKeyword("regis").addAction(
  async (ctx, { fallBack, flowDynamic, endFlow }) => {
    const { from: phone } = ctx;
    const user = userService.getUser(phone);
    user
  }
);
