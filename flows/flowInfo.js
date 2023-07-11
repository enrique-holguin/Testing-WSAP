const { addKeyword } = require("@bot-whatsapp/bot");
const { infoKeyword } = require("../utils/constants/flowKeywords");



const flowInfo = addKeyword(infoKeyword)
.addAnswer()
