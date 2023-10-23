const Joi = require("joi");

const name = Joi.string().min(3).max(20);
const phone = Joi.string().min(6).max(15);

const createCustomerSchema = Joi.object({
  firstName: name.required(),
  lastName: name.required(),
  phone: phone.required(),
});

const updateCustomerSchema = Joi.object({
  firstName: name,
  lastName: name,
  phone,
});

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
};
