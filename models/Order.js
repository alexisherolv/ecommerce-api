const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => sequelize.define('orders', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    product: {
      type: Sequelize.INTEGER,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    user: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}, {
  hooks: {
    beforeCreate: function (order, options, fn) {
      order.createdAt = new Date();
      order.updatedAt = new Date();
      fn(null, order);
    },
    beforeUpdate: function (order, options, fn) {
      order.updatedAt = new Date();
      fn(null, order);
    },
  },
});