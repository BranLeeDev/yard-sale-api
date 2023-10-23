const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("I am the HOME");
});

module.exports = app;
