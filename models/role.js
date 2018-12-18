'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    type: {type: DataTypes.STRING,
      isUnique: function(value, next) {
        Teacher.find({
          where:{name: value , id :{[Op.ne] : this.id}}
        })
       .then(data=> {
         if(data)  next(`Role already added`)
         else next()
       })
       .catch(err => {
         next(err)
       })
      }
    },
    UserId: DataTypes.INTEGER
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
  };
  return Role;
};