const { addKeyword } = require("@bot-whatsapp/bot");

const flowCatalogo = addKeyword(["CATALOGO"], {
  sensitive: true,
})
  .addAnswer(
    `Responde con el número de la opción!
      :one: Opción 1
      :two: Opción 2
      :three: Opción 3`,
    { capture: true },
    async (ctx, { fallBack, flowDynamic }) => {
      let numero = parseInt(ctx.body);

      if (isNaN(numero)) {
        return fallBack("¡Responde solo con el número de una opcion valida!");
      }

      switch (numero) {
        case 1:
          await flowDynamic("Opcion 1 seleccionada");
          break;
        case 2:
          await flowDynamic("Opcion 2 seleccionada");
          break;
        case 3:
          await flowDynamic("Opcion 3 seleccionada");
          break;
        default:
          fallBack("¡Responde con el número de una opcion valida!");
      }
    }
  )
  .addAnswer(
    `Muy bien, ahora responde con el número de la variante!
      :one: Variante 1
      :two: Variante 2`,
    { capture: true },
    async (ctx, { fallBack, flowDynamic }) => {
      let numero = parseInt(ctx.body);

      if (isNaN(numero)) {
        return fallBack("¡Responde solo con el número de una opcion valida!");
      }

      switch (numero) {
        case 1:
          await flowDynamic("Variante 1 seleccionada");
          return;
        case 2:
          await flowDynamic("Variante 2 seleccionada");
          return;
        default:
          fallBack("¡Responde con el número de una opcion valida!");
      }
    }
  );

module.exports = flowCatalogo;
