//@ts-check

const customers = {};

/**
 * @typedef {import('../../types/object').Customer} CustomerData
 */

class Customer {
  /**
   * @param {CustomerData} param0
   */
  constructor({ name, address, geo, phone }) {
    this.name = name;
    this.address = address;
    this.geo = geo;
    this.phone = phone;
  }
}

module.exports = { Customer, customers };
