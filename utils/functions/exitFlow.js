const exitKeyword = "salir";
/**
 * @param {string} body
 */

module.exports = (body) => body.toLowerCase().includes(exitKeyword);
