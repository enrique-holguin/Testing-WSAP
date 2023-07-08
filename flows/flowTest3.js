const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");

const flowEnding = addKeyword("Ending").addAnswer(
  "Tiempo expirado \nOperación Cancelada"
);

let timeoutId;

const flowForm = addKeyword("form")
  .addAction(async (ctx, { gotoFlow }) => {
    const timeOutDuration = 5 * 1000;
    timeoutId = setTimeout(async () => {
      await gotoFlow(flowEnding);
      // Finalizar el flujo
    }, timeOutDuration);
    return;
  })
  .addAnswer(
    "Por favor escriba su nombre",
    { capture: true },
    async (ctx, { fallBack, flowDynamic, endFlow }) => {
      clearTimeout(timeoutId);
      const { body: nombre } = ctx;
      await flowDynamic(`Perfecto ${nombre}`);
      return;
    }
  );

module.exports = {};
