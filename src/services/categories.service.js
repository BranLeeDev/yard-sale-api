const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class CategoriesService {
  async findAll() {
    const rta = await models.Category.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return rta;
  }

  async findOne(id) {
    const rta = await models.Category.findByPk(id, {
      include: [
        {
          association: "products",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
    });
    if (!rta) throw boom.notFound("Category not Found");
    return rta;
  }

  async create(body) {
    const rta = await models.Category.create(body);
    return rta;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const rta = await category.update(changes);
    return rta;
  }

  async destroy(id) {
    const category = await this.findOne(id);
    await category.destroy();
    return category;
  }
}

module.exports = CategoriesService;
