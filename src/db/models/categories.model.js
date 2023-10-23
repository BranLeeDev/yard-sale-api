const { DataTypes, Model } = require("sequelize");

const CATEGORY_TABLE = "categories";

const CategorySchema = {
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
};

class Category extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: "Category",
      timestamps: true,
    };
  }
}

module.exports = {
  CATEGORY_TABLE,
  CategorySchema,
  Category,
};
