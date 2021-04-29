// db.js
const { Sequelize } = require('sequelize');

// Importing models
const Product = require('./models/Product');
const Review = require('./models/Review');
const User = require('./models/User');
const Order = require('./models/Order');
const OrderProduct = require('./models/OrderProduct');

// Database connection
const sequelize = new Sequelize(process.env.MYSQLDB_DATABASE, process.env.MYSQLDB_USER, process.env.MYSQLDB_PASSWORD, {
  host: process.env.MYSQLDB_HOST,
  dialect: 'mysql',
  logging: false,
});

// Getting models
const models = [
  Product,
  Review,
  Order,
  User,
  OrderProduct
];

// Registering models into Sequelize
for (let model of models) {
  model(sequelize);
}

// Configuring relations
const { products, reviews, users, orders, orderProducts } = sequelize.models;
reviews.belongsTo(products); // Relation one-to-one in reviews table
//order.belongsTo(users); // Relation: Order has one user
//order.belongsTo(products); // Relation: Order has one product
products.belongsToMany(orders, {
  through: 'OrderProducts',
  as: 'orders',
  foreignKey: 'productId',
  otherKey : 'orderId'
});

orders.belongsToMany(products,{
  through: 'OrderProducts',
  as: 'products',
  foreignKey: 'orderId',
  otherKey : 'productId'
});

module.exports = sequelize;