//@ts-check

/**
 * @typedef {import('../types/UserData.types').UserData} UserData
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
