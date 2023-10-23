const Joi = require("joi");

const name = Joi.string().min(3).max(30);
const image = Joi.string().uri();

const createCategorySchema = Joi.object({
  name: name.required(),
  image: image.required(),
});

const updateCategorySchema = Joi.object({
  name,
  image,
});

module.exports = {
  createCategorySchema,
  updateCategorySchema,
};
