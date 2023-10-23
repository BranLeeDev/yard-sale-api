const { DataTypes, Model } = require("sequelize");
const { USER_TABLE } = require("./users.model");

const CUSTOMER_TABLE = "customers";

const CustomerSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  firstName: {
    field: "first_name",
    allowNull: false,
    type: DataTypes.STRING(20),
  },
  lastName: {
    field: "last_name",
    allowNull: false,
    type: DataTypes.STRING(20),
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING(15),
  },
  userId: {
    field: "user_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
};

class Customer extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: "user" });
    this.hasMany(models.Order, { as: "orders", foreignKey: "customerId" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: "Customer",
      timestamps: true,
    };
  }
}

module.exports = {
  CUSTOMER_TABLE,
  CustomerSchema,
  Customer,
};
