const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class UsersService {
  async findAll() {
    const rta = models.User.findAll();
    return rta;
  }

  async findOne(id) {
    const rta = models.User.findByPk(id);
    if (!rta) throw boom.notFound("User not Found");
    return rta;
  }

  async create(body) {
    const rta = models.User.create(body);
    return rta;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async destroy(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return user;
  }
}

module.exports = UsersService;
