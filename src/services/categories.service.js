const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class CategoriesService {
  async findAll() {
    const rta = models.Category.findAll();
    return rta;
  }

  async findOne(id) {
    const rta = models.Category.findByPk(id);
    if (!rta) throw boom.notFound("Category not Found");
    return rta;
  }

  async create(body) {
    const rta = models.Category.create(body);
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
