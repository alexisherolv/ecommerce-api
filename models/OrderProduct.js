const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => sequelize.define('ordersProducts', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    product:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    order: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    quantity: {
        type: Sequelize.DECIMAL
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}, {
  hooks: {
    beforeCreate: function (ordersProducts, options, fn) {
        ordersProducts.createdAt = new Date();
        ordersProducts.updatedAt = new Date();
        fn(null, ordersProducts);
    },
    beforeUpdate: function (ordersProducts, options, fn) {
        ordersProducts.updatedAt = new Date();
      fn(null, order);
    },
  },
});