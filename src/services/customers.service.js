const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class CustomersService {
  async findAll() {
    const rta = await models.Customer.findAll({
      include: [
        {
          association: "user",
          attributes: { exclude: ["createdAt", "updatedAt", "password"] },
        },
      ],
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return rta;
  }

  async findOne(id) {
    const rta = await models.Customer.findByPk(id, {
      include: [{ association: "user", attributes: { exclude: "password" } }],
    });
    if (!rta) throw boom.notFound("Customer not Found");
    return rta;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    const rta = await customer.update(changes);
    return rta;
  }

  async destroy(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return customer;
  }
}

module.exports = CustomersService;
