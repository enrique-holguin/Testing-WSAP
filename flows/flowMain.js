const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const { Customer, customers } = require("../api/models/Customer");
const CustomerService = require("../api/services/CustomerService");
const CustomerRepository = require("../api/repositories/CustomerRepository");

//Servicios y Repisotrios
const customerRepository = new CustomerRepository();
const customerService = new CustomerService(customerRepository);

const flowMain = addKeyword(EVENTS.WELCOME)
  .addAction(async (ctx, { fallBack, flowDynamic, endFlow }) => {
    const { from: phone } = ctx;
    const customer = customerService.getCustomer(phone);
    if (customer) {
      console.log(customers);
      return await endFlow(
        `El usuario con el número ${phone} ya está registrado`
      );
    }
    return;
  })
  .addAnswer(
    "Por favor escriba su dirección",
    { capture: true, delay: 600 },
    async (ctx, { fallBack, flowDynamic, endFlow }) => {
      const { body: direccion, pushName: name, from: phone } = ctx;
      const minLenght = 5;
      if (direccion.startsWith("_event_")) return await fallBack();
      if (direccion.length <= minLenght)
        return await fallBack(
          `Calle necesita de al menos unos ${minLenght} caracteres`
        );

      const customer = new Customer(name, direccion, direccion, phone);
      customerService.saveCustomer(customer);
      await flowDynamic({
        body: `${customerService.getCustomer(phone)}, gracias por registrarte.`,
      });
      return;
    }
  );

module.exports = flowMain;
