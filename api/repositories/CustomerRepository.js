// @ts-nocheck

const { customers, Customer } = require("../models/Customer");
class CustomerRepository {
  /**
   * @param {Customer} customer
   */
  saveCustomer(customer) {
    if (!customers[customer.phone]) {
      customers[customer.phone] = { ...customer };
      console.log(`Customer Saved`);
      return;
    }
    console.log("Customer exists in DB");
  }
  /**
   *
   * @param {number} phone
   * @returns {Customer | false}
   */
  getCustomer(phone) {
    const customer = customers[phone];
    return customer ?? false;
  }
}

module.exports = CustomerRepository;
