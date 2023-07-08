const { customers } = require("../models/Customer");
class CustomerRepository {
  saveCustomer(customer) {
    if (!customers[customer.phone]) customers[customer.phone] = { ...customer };
    console.log(`customer saved`);
  }
  getCustomer(phone) {
    const customer = customers[phone];
    return customer ?? false;
  }
}

module.exports = CustomerRepository;
