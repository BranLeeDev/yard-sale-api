const express = require("express");
const categoriesRouter = require("./categories.router");
const productsRouter = require("./products.router");
const usersRouter = require("./users.router");
const customersRouter = require("./customers.router");
const ordersRouter = require("./orders.router");
const authRouter = require("./auth.router");

function routerApi(app) {
  const router = express.Router();

  app.use("/api/v1", router);
  router.use("/categories", categoriesRouter);
  router.use("/products", productsRouter);
  router.use("/users", usersRouter);
  router.use("/customers", customersRouter);
  router.use("/orders", ordersRouter);
  router.use("/auth", authRouter);
}

module.exports = routerApi;
