//acceder a las variables de entorno .env
require("dotenv").config();
const { createBot, createProvider, createFlow } = require("@bot-whatsapp/bot");

const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");
const express = require("express");
const { join } = require("path");
const { createReadStream, readFileSync } = require("fs");
const qr = require("qrcode-terminal");

//Flows
const flowMain = require("./flows/flowMain");
const { flowTest } = require("./flows/flowTest");
const flowPurcharse = require("./flows/flowPurchase");
const flowAdmin = require("./flows/flowPurchase");
const flowCatalogo = require("./flows/flowTest2");
const { flowForm } = require("./flows/flowTest3");
const sharp = require("sharp");
const { error } = require("console");

const app = express();
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

  app.get("/", async (req, res) => {
    res.send("Hola Mundo");
  });

  app.get("/get-qr", async (req, res) => {
    const YOUR_PATH_QR = join(process.cwd(), `bot.qr.png`);
    const fileStream = createReadStream(YOUR_PATH_QR);

    res.writeHead(200, { "Content-Type": "image/png" });
    fileStream.pipe(res);
  });

  app.listen(process.env.PORT, "0.0.0.0", () => {
    console.log(`http://localhost:${process.env.PORT}`);
  });
};

main();
