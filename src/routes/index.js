const express = require("express");
const categoriesRouter = require("./categories.schema");
const productsRouter = require("./products.schema");

function routerApi(app) {
  const router = express.Router();

  app.use("/api/v1", router);
  router.use("/categories", categoriesRouter);
  router.use("/products", productsRouter);
}

module.exports = routerApi;
