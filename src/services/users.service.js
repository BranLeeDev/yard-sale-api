const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { models } = require("../libs/sequelize");

class UsersService {
  async findAll() {
    const rta = await models.User.findAll({
      include: [
        {
          association: "customer",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
      attributes: { exclude: ["createdAt", "updatedAt", "password"] },
    });
    return rta;
  }

  async findOne(id) {
    const rta = await models.User.findByPk(id, {
      include: ["customer"],
      attributes: { exclude: "password" },
    });
    if (!rta) throw boom.notFound("User not Found");
    return rta;
  }

  async findByEmail(email) {
    const rta = await models.User.findOne({ where: { email } });
    return rta;
  }

  async create(body) {
    const hash = await bcrypt.hash(body.password, 10);
    const rta = await models.User.create(
      { ...body, password: hash },
      { include: ["customer"] }
    );
    delete rta.dataValues.password;
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
