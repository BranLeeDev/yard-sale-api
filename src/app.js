// Libraries
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const boom = require("@hapi/boom");

// Imports
require("./utils/auth");
const {
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/errors.middleware");
const routerApi = require("./routes");

const app = express();

const whiteList = [];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(boom.unauthorized("You do not have permissions"));
    }
  },
};

app.use(helmet());
app.use(cors(options));
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("I am the HOME");
});

routerApi(app);

app.use(boomErrorHandler);
app.use(errorHandler);

module.exports = app;
