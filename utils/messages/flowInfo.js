const { nameCompany } = require("../constants/company");
const { formKeyword } = require("../constants/flowKeywords");

const messages = Object.freeze({
  aboutUs: `*${nameCompany}* es una empresa líder en soluciones tecnológicas y desarrollo de software.`,
  services: `Ofrecemos una amplia gama de servicios, como: 
🌐 Desarrollo de aplicaciones web. 
📱 Desarrollo de aplicaciones móviles.
🤖 Creación de chatbots para WhatsApp.
🎨 Diseño de interfaces intuitivas y mucho más.
Estamos aquí para ayudarte a alcanzar el éxito en el mundo digital.😊🚀`,
  info: `Si deseas obtener más información o contactarnos.
Simplemente *Escriba la opción ${formKeyword}* en este chat.`,
});

module.exports = { messages };
