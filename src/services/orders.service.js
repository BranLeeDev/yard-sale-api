const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class OrdersService {
  async findOne(id) {
    const rta = await models.Order.findByPk(id, {
      include: [
        {
          association: "customer",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          association: "items",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
    });
    if (!rta) throw boom.notFound("Order not Found");
    return rta;
  }

  // Order
  async create(body) {
    const rta = await models.Order.create(body);
    return rta;
  }

  // OrderProduct
  async addItem(body) {
    const rta = await models.OrderProduct.create(body);
    return rta;
  }

  async destroy(id) {
    const order = await this.findOne(id);
    await order.destroy();
    return order;
  }
}

module.exports = OrdersService;
