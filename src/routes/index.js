const express = require("express");
const categoriesRouter = require("./categories.schema");
const productsRouter = require("./products.schema");
const usersRouter = require("./users.schema");

function routerApi(app) {
  const router = express.Router();

  app.use("/api/v1", router);
  router.use("/categories", categoriesRouter);
  router.use("/products", productsRouter);
  router.use("/users", usersRouter);
}

module.exports = routerApi;
