const express = require("express");

// Controllers
const {
  createOrder,
  getOneOrder,
  deleteOrder,
  addItem,
} = require("../controllers/orders.controller");

// Schemas
const {
  createOrderSchema,
  addItemOrderSchema,
} = require("../schemas/orders.schema");
const { getOneSchema } = require("../schemas");

// Validate Schemas
const validateSchema = require("../middlewares/validate.middleware");

const ordersRouter = express.Router();

ordersRouter
  .route("/")
  .post(validateSchema(createOrderSchema, "body"), createOrder);

ordersRouter
  .route("/add-item")
  .post(validateSchema(addItemOrderSchema, "body"), addItem);

ordersRouter
  .route("/:id")
  .all(validateSchema(getOneSchema, "params"))
  .get(getOneOrder)
  .delete(deleteOrder);

module.exports = ordersRouter;
