'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    UserId:DataTypes.INTEGER
  }, {});

 

  Post.associate = function(models) {
    // associations can be defined here
    
    Post.hasMany(models.PostLike)
    Post.belongsToMany(models.User, {through: models.PostLike })
    Post.belongsToMany(models.Tag, {through: models.PostTag})
    Post.belongsTo(models.User)
    
  };
  return Post;
};