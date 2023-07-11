const { tempDataUsers } = require("../../api/User/cache/dataCache");
const User = require("../../api/User/models/User");

/**
 * @param {number} phone
 */

module.exports = (phone) => {
  delete tempDataUsers[phone];
};
