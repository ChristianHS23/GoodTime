'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsToMany(models.User, {through: models.PostLike })
    Post.belongsToMany(models.Tag, {through: models.PostTag})
  };
  return Post;
};