'use strict';

const bcrypt = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
      hooks: {
        beforeCreate: (user, option) => {
          user.password = bcrypt.encrypt(user.password)
        }
      }
    });


  User.associate = function (models) {
    // associations can be defined here
  };

  return User;
};
