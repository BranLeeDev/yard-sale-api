const Joi = require("joi");
const { id } = require(".");

const name = Joi.string().min(3).max(30);
const image = Joi.string().uri();
const description = Joi.string().min(15).max(255);
const price = Joi.number().integer().positive();

const createProductSchema = Joi.object({
  name: name.required(),
  image: image.required(),
  description: description.required(),
  price: price.required(),
  categoryId: id.required(),
});

const updateProductSchema = Joi.object({
  name,
  image,
  description,
  price,
  categoryId: id,
});

module.exports = {
  createProductSchema,
  updateProductSchema,
};
