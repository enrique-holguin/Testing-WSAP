//@ts-check

/**
 * @typedef {import('./User.types').UserData} UserData
 */

class User {
  /**
   *
   * @param {UserData} param0
   */
  constructor({ name, phone, geo, address }) {
    this.name = name;
    this.phone = phone;
    this.geo = geo;
    this.address = address;
  }
}

module.exports = User;
