const { createBot, createProvider, createFlow } = require("@bot-whatsapp/bot");

const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");
const BOTNAME = "Cremoladas-Bot";
const BOTPORT = 3001;

//Flows
const flowMain = require("./flows/flowMain");

const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([flowMain]);
  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb({ name: BOTNAME, port: BOTPORT });
};

main();
