class CustomerService {
  constructor(customerRepository) {
    this.customerRepository = customerRepository;
  }
  saveCustomer(customer) {
    this.customerRepository.saveCustomer(customer);
  }
  getCustomer(phone) {
    return this.customerRepository.getCustomer(phone);
  }
}

module.exports = CustomerService;
