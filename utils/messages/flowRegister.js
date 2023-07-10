const User = require("../../api/User/models/User");

const messages = Object.freeze({
  /**
   * @param {User | null} user
   */
  userExists(user) {
    return user
      ? `⚠️ ${user.name} ya estás registrado`
      : `📝Ahora le pediremos algunos datos. \n*Por favor siga las indicaciones*`;
  },
  salir: `🔔 Recuerde que puede cancelar la operación en cualquier momento escribiendo \n*Salir*`,
  invalidName: `⚠️ Por favor escriba un nombre válido`,
  minMaxLength(nameMinLength, nameMaxLength) {
    return `⚠️ El nombre debe tener entre ${nameMinLength}-${nameMaxLength} caracteres de
    longitud `;
  },
  notWhiteSpace: `⚠️ El nombre no debe tener espacios vacíos`,
  exit: `🔔 La operación fue cancelada`,
  requestGeo: `🌍 Ahora por favor envié su \n*Ubicación Actual* \nNo confundir con ubicación en tiempo real`,
  invalidGeo: `Por favor mande su \n*Ubicación Actual*`,
  requestAddress: `🏠 Como último paso, por favor escriba su dirección`,
  invalidAddress: `⚠️ Por favor escriba una calle válida`,
  registrationCompleted: `😊 Registro Completado \nAhora puede gozar de nuestros beneficios como usuario`,
});

module.exports = { messages };
