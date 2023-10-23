const express = require("express");

// Controllers
const {
  getAllCategories,
  createCategory,
  getOneCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories.controller");

// Schemas
const {
  createCategorySchema,
  updateCategorySchema,
} = require("../schemas/categories.schema");
const { getOneSchema } = require("../schemas");

// Validate Schemas
const validateSchema = require("../middlewares/validate.middleware");

const categoriesRouter = express.Router();

categoriesRouter
  .route("/")
  .get(getAllCategories)
  .post(validateSchema(createCategorySchema, "body"), createCategory);

categoriesRouter
  .route("/:id")
  .all(validateSchema(getOneSchema, "params"))
  .get(getOneCategory)
  .patch(validateSchema(updateCategorySchema, "body"), updateCategory)
  .delete(deleteCategory);

module.exports = categoriesRouter;
