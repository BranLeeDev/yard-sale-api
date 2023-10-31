const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");
const { Op } = require("sequelize");

class ProductsService {
  async findAll(query) {
    const options = {
      include: [
        {
          association: "category",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: {},
    };

    const { limit, offset } = query;

    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const { min_price, max_price } = query;

    if (min_price && max_price) {
      options.where.price = {
        [Op.gte]: min_price,
        [Op.lte]: max_price,
      };
    }

    const rta = await models.Product.findAll(options);
    return rta;
  }

  async findOne(id) {
    const rta = await models.Product.findByPk(id);
    if (!rta) throw boom.notFound("Product not Found");
    return rta;
  }

  async create(body) {
    const rta = await models.Product.create(body);
    return rta;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const rta = await product.update(changes);
    return rta;
  }

  async destroy(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return product;
  }
}

module.exports = ProductsService;
