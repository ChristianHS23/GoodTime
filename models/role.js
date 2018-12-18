'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    type: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
  };
  return Role;
};