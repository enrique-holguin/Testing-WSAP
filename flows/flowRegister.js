const { addKeyword } = require("@bot-whatsapp/bot");

//Inyección de dependencias User
const { userService } = require("../containers/container");
const { messages } = require("../utils/messages/flowRegister");

//Variable donde se almacena los datos en caché
const { tempDataUsers } = require("../api/User/cache/dataCache");

const flowRegister = addKeyword("regis")
  .addAction(async (ctx, { fallBack, flowDynamic, endFlow }) => {
    const { from: phone } = ctx;
    const user = userService.getUser(phone);
    return user
      ? await endFlow(messages.userExists(user))
      : await flowDynamic(messages.userExists(null));
  })
  .addAnswer(
    [messages.salir, "✍️ Por favor escriba su *Nombre*"],
    { capture: true, delay: 600 },
    /**
     *
     * @param {{body:string,from:string}} ctx
     * @param {*} param1
     */
    async (ctx, { fallBack, flowDynamic, endFlow }) => {
      const { body: name, from: phone } = ctx;
    }
  );
