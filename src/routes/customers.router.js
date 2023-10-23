const express = require("express");

// Controllers
const {
  getAllCustomers,
  getOneCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customers.controller");

// Schemas
const { updateCustomerSchema } = require("../schemas/customers.schema");
const { getOneSchema } = require("../schemas");

// Validate Schemas
const validateSchema = require("../middlewares/validate.middleware");

const customersRouter = express.Router();

customersRouter.route("/").get(getAllCustomers);

customersRouter
  .route("/:id")
  .all(validateSchema(getOneSchema, "params"))
  .get(getOneCustomer)
  .patch(validateSchema(updateCustomerSchema, "body"), updateCustomer)
  .delete(deleteCustomer);

module.exports = customersRouter;
