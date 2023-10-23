const ProductsService = require("../services/products.service");

const service = new ProductsService();

const getAllProducts = async (req, res, next) => {
  try {
    const rta = await service.findAll();
    return res.json(rta);
  } catch (error) {
    next(error);
  }
};

const getOneProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await service.findOne(id);
    return res.json(rta);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const body = req.body;
    const rta = await service.create(body);
    return res.status(201).json({
      message: "Product created",
      data: rta,
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const rta = await service.update(id, body);
    return res.json({
      message: "Product updated",
      data: rta,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await service.destroy(id);
    return res.json({
      message: "Product deleted",
      data: rta,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
