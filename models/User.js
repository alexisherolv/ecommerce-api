const { DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
    const User = sequelize.define('users', {
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
}, {
  hooks: {
    beforeCreate: function (user, options, fn) {
      user.createdAt = new Date();
      user.updatedAt = new Date();
      fn(null, user);
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(user.password, salt);
    },
    beforeUpdate: function (user, options, fn) {
      user.updatedAt = new Date();
      fn(null, user);
    },
  },
});

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  return User;
}


