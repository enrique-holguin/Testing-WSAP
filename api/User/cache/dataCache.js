const User = require("../models/User");

//Variable global que sirve como cache para almacenar datos temporales

/**
 * @type {{[key: number]: User}}
 */
const tempDataUsers = {};

module.exports = { tempDataUsers };
