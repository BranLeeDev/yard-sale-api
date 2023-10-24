const Joi = require("joi");
const { id } = require(".");

const createOrderSchema = Joi.object({
  customerId: id.required(),
});

const addItemOrderSchema = Joi.object({
  orderId: id.required(),
  productId: id.required(),
  amount: id.required(),
});

module.exports = {
  createOrderSchema,
  addItemOrderSchema,
};
