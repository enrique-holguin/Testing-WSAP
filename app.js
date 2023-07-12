//acceder a las variables de entorno .env
require("dotenv").config();
const {
  createBot,
  createProvider,
  createFlow,
  addKeyword,
  EVENTS,
} = require("@bot-whatsapp/bot");

const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");
const express = require("express");
const { join } = require("path");
const { createReadStream } = require("fs");

//Flows
const { flowMain } = require("./flows/flowMain");
const { flowRegister } = require("./flows/flowRegister");
const { flowForm } = require("./flows/flowForm");
const { flowInfo } = require("./flows/flowInfo");

//Express
const app = express();

const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([flowMain, flowRegister, flowForm, flowInfo]);
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

  app.post("/send", async (req, res) => {
    res.json("Hola");
  });

  app.listen(process.env.PORT, "0.0.0.0", () => {
    console.log(`http://localhost:${process.env.PORT}`);
  });
};

main();
