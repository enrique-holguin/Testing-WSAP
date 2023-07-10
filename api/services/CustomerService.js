//@ts-check

const { Customer } = require("../models/Customer");
const CustomerRepository = require("../repositories/CustomerRepository");

class CustomerService {
  /**
   *
   * @param {CustomerRepository} customerRepository
   */
  constructor(customerRepository) {
    this.customerRepository = customerRepository;
  }
  /**
   * @param {Customer} customer
   */
  saveCustomer(customer) {
    this.customerRepository.saveCustomer(customer);
  }
  /**
   * @param {number} phone
   */
  getCustomer(phone) {
    return this.customerRepository.getCustomer(phone);
  }
}

module.exports = CustomerService;
