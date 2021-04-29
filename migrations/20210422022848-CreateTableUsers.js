'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      nombre: Sequelize.TEXT,
      apellidoMaterno: Sequelize.TEXT,
      apellidoPaterno: Sequelize.TEXT,
      tipoUsuario: Sequelize.TEXT,
      email: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('users');
    }
};
