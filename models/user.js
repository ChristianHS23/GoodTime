'use strict';
module.exports = (sequelize, DataTypes) => {
  const crypto = require('crypto')
  const cryptoHash = require('../helpers/cryptoHash')
  const Op = sequelize.Op
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
   password: {type: DataTypes.STRING,
      validate: {
        is : {
          args : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i ,
          msg : "Password Must Have 1 Uppercase 1 Number and 8 Characters"
        }
      }
    },
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
    reputasi: DataTypes.REAL,
    isBan : DataTypes.BOOLEAN,
    secret : DataTypes.STRING,
    role: DataTypes.STRING
  }, {hooks: {
    beforeCreate: (value) => {
      return new Promise ((resolve, reject)=> {
        crypto.randomBytes(40, (err,buf)=> {
          if(err) reject( err)
          else {
            value.secret = buf.toString('hex')
            value.password = cryptoHash(value.secret, value.password)     
            resolve(this)       
          }
        })
      })
    }
  }});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.PostLike)
    User.belongsToMany(models.Post , {through: models.PostLike})
    User.hasMany(models.Post)
  
   
  };
  return User;
};