const { Category, CategorySchema } = require("./categories.model");
const { Customer, CustomerSchema } = require("./customers.model");
const { OrderProduct, OrderProductSchema } = require("./orders-products.model");
const { Order, OrderSchema } = require("./orders.model");
const { Product, ProductSchema } = require("./products.model");
const { User, UserSchema } = require("./users.model");

function setupModels(sequelize) {
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = setupModels;
