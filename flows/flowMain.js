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
    const customer = await customerService.getCustomer(phone);
    if (customer) {
      console.log(customer);
      return endFlow(`El usuario con el número ${phone} ya está registrado`);
    }
    return;
  })
  .addAnswer(
    "Por favor escriba su dirección",
    { capture: true, delay: 600 },
    async (ctx, { fallBack, flowDynamic, endFlow, provider }) => {
      const { body: address, pushName: name, from: phone } = ctx;
      console.log(provider);
      const addresMinLenght = 5;
      if (address.startsWith("_event_")) return await fallBack();
      if (address.length <= addresMinLenght)
        return await fallBack(
          `Calle necesita de al menos unos ${addresMinLenght} caracteres`
        );

      const customer = new Customer(name, address, address, phone);
      customerService.saveCustomer(customer);
      const createdCustomer = customerService.getCustomer(phone);
      console.log(createdCustomer);
      await flowDynamic({
        body: `${createdCustomer.name}, gracias por registrarte.`,
      });
      return;
    }
  );

module.exports = flowMain;
