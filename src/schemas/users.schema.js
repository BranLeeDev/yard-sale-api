const Joi = require("joi");

const email = Joi.string().email();
const password = Joi.string().min(8).max(30);
const role = Joi.string().max(15);

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role.required(),
});

const updateUserSchema = Joi.object({
  email,
  password,
  role,
});

module.exports = {
  createUserSchema,
  updateUserSchema,
};
