const { createBot, createProvider, createFlow } = require("@bot-whatsapp/bot");

const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");
const BOTNAME = "Cremoladas-Bot";
const BOTPORT = 3001;

//Flows
const flowMain = require("./flows/flowMain");
const { flowTest } = require("./flows/flowTest");
const flowPurcharse = require("./flows/flowPurchase");
const flowAdmin = require("./flows/flowPurchase");
const flowCatalogo = require("./flows/flowTest2");
const { flowForm } = require("./flows/flowTest3");

const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([
    flowPurcharse,
    flowAdmin,
    flowCatalogo,
    flowTest(15),
  ]);
  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb({ name: BOTNAME, port: BOTPORT });
};

main();
