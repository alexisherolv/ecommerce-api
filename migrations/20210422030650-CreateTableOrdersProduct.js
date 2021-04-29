'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ordersProducts', {
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
    })
  },

    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('ordersProduct');
    }
};
