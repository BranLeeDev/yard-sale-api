const OrdersService = require("../services/orders.service");

const service = new OrdersService();

const getOneOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await service.findOne(id);
    return res.json(rta);
  } catch (error) {
    next(error);
  }
};

const createOrder = async (req, res, next) => {
  try {
    const body = req.body;
    const rta = await service.create(body);
    return res.status(201).json({
      message: "Order created",
      data: rta,
    });
  } catch (error) {
    next(error);
  }
};

const addItem = async (req, res, next) => {
  try {
    const body = req.body;
    const rta = await service.addItem(body);
    res.status(201).json({
      message: "Added item",
      data: rta,
    });
  } catch (error) {
    next(error);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await service.destroy(id);
    return res.json({
      message: "Order deleted",
      data: rta,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getOneOrder,
  createOrder,
  deleteOrder,
  addItem,
};
