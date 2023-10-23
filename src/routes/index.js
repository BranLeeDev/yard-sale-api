const express = require("express");
const categoriesRouter = require("./categories.schema");

function routerApi(app) {
  const router = express.Router();

  app.use("/api/v1", router);
  router.use("/categories", categoriesRouter);
}

module.exports = routerApi;
