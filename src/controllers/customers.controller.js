const CustomersService = require("../services/customers.service");

const service = new CustomersService();

const getAllCustomers = async (req, res, next) => {
  try {
    const rta = await service.findAll();
    return res.json(rta);
  } catch (error) {
    next(error);
  }
};

const getOneCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await service.findOne(id);
    return res.json(rta);
  } catch (error) {
    next(error);
  }
};

const createCustomer = async (req, res, next) => {
  try {
    const body = req.body;
    const rta = await service.create(body);
    return res.status(201).json({
      message: "Customer created",
      data: rta,
    });
  } catch (error) {
    next(error);
  }
};

const updateCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const rta = await service.update(id, body);
    return res.json({
      message: "Customer updated",
      data: rta,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await service.destroy(id);
    return res.json({
      message: "Customer deleted",
      data: rta,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCustomers,
  getOneCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
