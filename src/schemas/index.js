const Joi = require("joi");

const id = Joi.number().integer().positive();

const getOneSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  getOneSchema,
};
