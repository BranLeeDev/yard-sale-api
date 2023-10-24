const { DataTypes, Model } = require("sequelize");
const { ORDER_TABLE } = require("./orders.model");
const { PRODUCT_TABLE } = require("./products.model");

const ORDER_PRODUCT_TABLE = "orders_products";

const OrderProductSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  orderId: {
    field: "order_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ORDER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  productId: {
    field: "product_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
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

class OrderProduct extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_PRODUCT_TABLE,
      modelName: "OrderProduct",
      timestamps: true,
    };
  }
}

module.exports = {
  ORDER_PRODUCT_TABLE,
  OrderProductSchema,
  OrderProduct,
};
