const { addKeyword, addAnswer } = require("@bot-whatsapp/bot");
const { Console } = require("console");
const path = require("path");

const admins = [51234151, 512512512, 1231242151];
const flowAdmin = addKeyword("admin").addAction(
  async (ctx, { fallBack, flowDynamic, endFlow }) => {
    const { from: phone } = ctx;
    const isAdmin = admins.find((admin) => admin == phone);
    console.log(isAdmin);
    if (!isAdmin) return endFlow("Acceso denegado");
    await flowDynamic("Acceso concedido");
    return;
  }
);

const flowPurcharse = addKeyword("compra").addAnswer(
  "Enviando archivo...",
  null,
  async (ctx, { provider, endFlow }) => {
    const { from: phone } = ctx;
    const id = `${phone}@c.us`;
    const filePath = path.join(__dirname, "../files/Hola.txt");
    console.log(filePath);
    await provider.sendFile(id, filePath);
    return endFlow("Archivo enviado");
  }
);

module.exports = flowPurcharse;
module.exports = flowAdmin;
