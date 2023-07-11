const { addKeyword } = require("@bot-whatsapp/bot");
const { infoKeyword } = require("../utils/constants/flowKeywords");

//messages
const { messages } = require("../utils/messages/flowInfo");

const flowInfo = addKeyword(infoKeyword, { sensitive: true })
  .addAnswer([messages.aboutUs], {
    delay: 500,
  })
  .addAnswer(messages.services, { delay: 1200 })
  .addAnswer(messages.info, { delay: 1200 });

module.exports = { flowInfo };
