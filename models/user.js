'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: {type: DataTypes.STRING,
      validate: {
        is : {
          args : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i ,
          msg : "Password Must Have 1 Uppercase 1 and 8 characters"
        }
      }
    },
    email: DataTypes.STRING,
    reputasi: DataTypes.REAL
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};