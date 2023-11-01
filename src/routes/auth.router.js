const express = require("express");
const passport = require("passport");

const { authenticateUser } = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter
  .route("/login")
  .post(passport.authenticate("local", { session: false }), authenticateUser);

module.exports = authRouter;
