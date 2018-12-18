'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type : DataTypes.STRING,
      validate : {        
        isUnique : function(value){          
          return User.findOne({
            where : {
              username:value,
              id : {
                [Op.ne] : this.id
              }
            }            
          })
          .then((data)=>{
            if(data){
              throw `username already registered`
            }            
          })
          .catch(err=>{
            throw new Error(err)
          })
        },
        min : 5
      }
    },
    password: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      validate : {        
        isUnique : function(value){          
          return User.findOne({
            where : {
              email:value,
              id : {
                [Op.ne] : this.id
              }
            }            
          })
          .then((data)=>{
            if(data){
              throw `email already registered`
            }            
          })
          .catch(err=>{
            throw new Error(err)
          })
        },
        isEmail : {
          args:true,
          msg: `Email format is wrong!`
        }
      }
    },
    reputasi: DataTypes.REAL
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};