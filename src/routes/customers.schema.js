const express = require("express");

// Controllers
const {
  getAllCustomers,
  createCustomer,
  getOneCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customers.controller");

// Schemas
const {
  createCustomerSchema,
  updateCustomerSchema,
} = require("../schemas/customers.schema");
const { getOneSchema } = require("../schemas");

// Validate Schemas
const validateSchema = require("../middlewares/validate.middleware");

const customersRouter = express.Router();

customersRouter
  .route("/")
  .get(getAllCustomers)
  .post(validateSchema(createCustomerSchema, "body"), createCustomer);

customersRouter
  .route("/:id")
  .all(validateSchema(getOneSchema, "params"))
  .get(getOneCustomer)
  .patch(validateSchema(updateCustomerSchema, "body"), updateCustomer)
  .delete(deleteCustomer);

module.exports = customersRouter;
