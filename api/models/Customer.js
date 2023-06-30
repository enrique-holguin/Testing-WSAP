const customers = {};

class Customer {
  constructor(name, address, geo, phone) {
    this.name = name;
    this.address = address;
    this.geo = geo;
    this.phone = phone;
  }
  saveCustomer() {
    //Guardamos la instancia de Customer en la variable customers usando como key único el this.phone
  }
  getCustomer() {
    return `Name: ${this.name}, Address:${this.address}`;
  }
}

module.exports = { Customer, customers };
