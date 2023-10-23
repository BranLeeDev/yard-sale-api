const express = require("express");

// Controllers
const {
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

// Schemas
const {
  createUserSchema,
  updateUserSchema,
} = require("../schemas/users.schema");
const { getOneSchema } = require("../schemas");

// Validate Schemas
const validateSchema = require("../middlewares/validate.middleware");

const usersRouter = express.Router();

usersRouter
  .route("/")
  .get(getAllUsers)
  .post(validateSchema(createUserSchema, "body"), createUser);

usersRouter
  .route("/:id")
  .all(validateSchema(getOneSchema, "params"))
  .get(getOneUser)
  .patch(validateSchema(updateUserSchema, "body"), updateUser)
  .delete(deleteUser);

module.exports = usersRouter;
