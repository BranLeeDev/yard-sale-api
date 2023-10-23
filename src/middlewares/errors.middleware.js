const { ValidationError } = require("sequelize");

function errorHandler(err, req, res, next) {
  return res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    return res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(409).json({
      statusCode: 409,
      message: err.message,
      errors: err.errors,
      stack: err.stack,
    });
  } else {
    next(err);
  }
}

module.exports = {
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
};
