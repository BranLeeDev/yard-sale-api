const UsersService = require("../services/users.service");

const service = new UsersService();

const getAllUsers = async (req, res, next) => {
  try {
    const rta = await service.findAll();
    return res.json(rta);
  } catch (error) {
    next(error);
  }
};

const getOneUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await service.findOne(id);
    return res.json(rta);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const body = req.body;
    const rta = await service.create(body);
    return res.status(201).json({
      message: "User created",
      data: rta,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const rta = await service.update(id, body);
    return res.json({
      message: "User updated",
      data: rta,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await service.destroy(id);
    return res.json({
      message: "User deleted",
      data: rta,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
