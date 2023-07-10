const { addKeyword, EVENTS, addAnswer } = require("@bot-whatsapp/bot");

//Inyección de dependencias User
const { userService } = require("../containers/userContainer");
const { messages } = require("../utils/messages/flowRegister");

//Variable donde se almacena los datos en caché
const { tempDataUsers } = require("../api/User/cache/dataCache");

//REGEX
const {
  REGEX_WHITE_SPACE,
  REGEX_EVENT_LOCATION,
} = require("../utils/regex/regex");

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
    async (ctx, { fallBack, flowDynamic, endFlow, gotoFlow }) => {
      const { body: name, from: phone } = ctx;
      const nameMinLength = 5;
      const nameMaxLength = 12;
      if (name.toLowerCase().includes("salir")) return endFlow(messages.exit);
      if (name.startsWith("_event_"))
        return await fallBack(messages.invalidName);
      if (name.length < nameMinLength || name.length > nameMaxLength) {
        return await fallBack(
          messages.minMaxLength(nameMinLength, nameMaxLength)
        );
      }
      if (!REGEX_WHITE_SPACE.test(name))
        return await fallBack(messages.notWhiteSpace);
      //Creación del usuario y almacenamiento en cache
      tempDataUsers[phone] = { name, phone };
      await flowDynamic(`Perfecto ${name} ✔️`);
      return;
    }
  )
  .addAnswer(
    messages.requestGeo,
    { capture: true, delay: 600 },
    async (ctx, { fallBack, flowDynamic, endFlow, gotoFlow }) => {
      const { body: geoEvent, from: phone } = ctx;
      if (geoEvent.toLowerCase().includes("salir"))
        return endFlow(messages.exit);
      if (!REGEX_EVENT_LOCATION.test(geoEvent)) {
        await fallBack(messages.invalidGeo);
        return;
      }
      const lat = ctx.message?.locationMessage?.degreesLatitude;
      const lng = ctx.message?.locationMessage?.degreesLongitude;
      tempDataUsers[phone].geo = { lat, lng };
      return;
    }
  )
  .addAnswer(
    messages.requestAddress,
    { capture: true, delay: 500 },
    async (ctx, { fallBack, flowDynamic, endFlow }) => {
      const { body: address, from: phone } = ctx;
      if (address.toLowerCase().includes("salir"))
        return endFlow(messages.exit);
      if (address.startsWith("_event_"))
        return await fallBack(messages.invalidAddress);
      tempDataUsers[phone].address = address;
      userService.saveUser(tempDataUsers[phone]);
      const user = userService.getUser(phone);
      await flowDynamic(`Perfecto ${user.name}`);
      await endFlow(messages.registrationCompleted);
      return;
    }
  );

module.exports = { flowRegister };
