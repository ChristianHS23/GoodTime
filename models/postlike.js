'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostLike = sequelize.define('PostLike', {
    PostId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    Like: DataTypes.BOOLEAN
  }, {});
  PostLike.associate = function(models) {
    // associations can be defined here
  };
  return PostLike;
};