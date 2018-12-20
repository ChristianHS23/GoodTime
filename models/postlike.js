'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostLike = sequelize.define('PostLike', {
    PostId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    Like: DataTypes.BOOLEAN
  }, {});
  PostLike.beforeCreate(function(value){
    return sequelize.models.PostLike.find({
      where: {
                UserId : value.UserId,
                PostId : value.PostId
              }
    })
    .then(data=>{
      if(data){
        throw Error(`you already liked this post`)
      }
      
    })
    .catch(err=>{
      throw new Error(err)
    })
  })

  PostLike.associate = function(models) {
    // associations can be defined here
    PostLike.belongsTo(models.Post)
    PostLike.belongsTo(models.User)
  };
  return PostLike;
};