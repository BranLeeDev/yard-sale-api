const express = require("express");
const categoriesRouter = require("./categories.schema");
const productsRouter = require("./products.schema");
const usersRouter = require("./users.schema");
const customersRouter = require("./customers.schema");

function routerApi(app) {
  const router = express.Router();

  app.use("/api/v1", router);
  router.use("/categories", categoriesRouter);
  router.use("/products", productsRouter);
  router.use("/users", usersRouter);
  router.use("/customers", customersRouter);
}

module.exports = routerApi;
