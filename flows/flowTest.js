const { addKeyword } = require("@bot-whatsapp/bot");

const flowEnding = addKeyword("final").addAnswer(
  `Tiempo de espera expirado . \nOperación Cancelada`
);

function flowTest(timeoutDuration) {
  let timeoutId; // Variable global para almacenar el identificador del temporizador

  //   const timeoutDuration = 10000; // Duración del tiempo de espera en milisegundos (10 segundos en este caso)

  const timeSeconds = timeoutDuration * 1000;

  return addKeyword("form")
    .addAction(async (ctx, { flowDynamic, endFlow, gotoFlow }) => {
      timeoutId = setTimeout(async () => {
        gotoFlow(flowEnding);
        return;
        // Finalizar el flujo
      }, timeSeconds);
      return;
    })
    .addAnswer(
      "Por favor escriba su nombre",
      { capture: true },
      async (ctx, { flowDynamic, gotoFlow }) => {
        clearTimeout(timeoutId); // Cancelar el temporizador si se recibe una respuesta antes del tiempo de espera
        // Resto de la lógica para manejar la respuesta del usuario
        const { body: nombre } = ctx;
        await flowDynamic(`Perfecto ${nombre}`);
        timeoutId = setTimeout(async () => {
          gotoFlow(flowEnding);
          return;
          // Finalizar el flujo
        }, timeSeconds);
        return;
      }
    )
    .addAnswer(
      "Por favor escriba su documento de identidad",
      { capture: true },
      async (ctx, { flowDyanmic, endFlow, fallBack }) => {
        const { body: dni } = ctx;
        //Si no es number es invalida
        const dniLength = 8;
        if (isNaN(+dni) || String(dni).length !== dniLength) {
          await fallBack(
            `Dni no válido \nDebe ser un número de ${dniLength} dígitos`
          );
          return;
        }
        clearTimeout(timeoutId);
        await endFlow(`Dni ${dni} registrado`);
        return;
      }
    );
}

module.exports = { flowTest };
