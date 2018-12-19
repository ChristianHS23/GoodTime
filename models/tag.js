'use strict';
module.exports = (sequelize, DataTypes) => {
  const Op = sequelize.Op
  const Tag = sequelize.define('Tag', {
    name: {type: DataTypes.STRING,
      isUnique: function(value, next) {
        Teacher.find({
          where:{name: value , id :{[Op.ne] : this.id}}
        })
       .then(data=> {
         if(data)  next(`Tag already used`)
         else next()
       })
       .catch(err => {
         next(err)
       })
      }
    }
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    Tag.belongsToMany(models.Post, {through : models.PostTag})
  };
  return Tag;
};