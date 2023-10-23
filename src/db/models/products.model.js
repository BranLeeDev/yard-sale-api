const { DataTypes, Model } = require("sequelize");
const { CATEGORY_TABLE } = require("./categories.model");

const PRODUCT_TABLE = "products";

const ProductSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(30),
  },
  image: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING(255),
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  categoryId: {
    field: "category_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
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

class Product extends Model {
  static associate(models) {
    this.belongsTo(models.Category, { as: "category" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: "Product",
      timestamps: true,
    };
  }
}

module.exports = {
  PRODUCT_TABLE,
  ProductSchema,
  Product,
};
