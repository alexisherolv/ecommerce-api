// db.js
const { Sequelize } = require('sequelize');

// Importing models
const Product = require('./models/Product');
const Review = require('./models/Review');
const User = require('./models/User');
const Order = require('./models/Order');
const OrderProduct = require('./models/OrderProduct');

// Database connection
const sequelize = new Sequelize('ecommerceapi', 'root', '06/05/06ac', {
  host: 'localhost',
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