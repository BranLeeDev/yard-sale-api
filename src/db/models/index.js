const { Category, CategorySchema } = require("./categories.model");

function setupModels(sequelize) {
  Category.init(CategorySchema, Category.config(sequelize));
}

module.exports = setupModels;
