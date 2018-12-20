'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      let postLikeObj = [{
        PostId: 2,
        UserId:3,
        Like: true
      },{
        PostId: 2,
        UserId:4,
        Like: true
      },{
        PostId: 2,
        UserId:1,
        Like: true
      },{
        PostId: 2,
        UserId:5,
        Like: true
      },{
        PostId: 2,
        UserId:2,
        Like: true
      },{
        PostId: 2,
        UserId:7,
        Like: true
      },{
        PostId: 2,
        UserId:8,
        Like: true
      },{
        PostId: 1,
        UserId:3,
        Like: true
      },{
        PostId: 1,
        UserId:1,
        Like: true
      },{
        PostId: 1,
        UserId:2,
        Like: true
      },{
        PostId: 1,
        UserId:7,
        Like: true
      },{
        PostId: 1,
        UserId: 9,
        Like: true
      },{
        PostId: 1,
        UserId:8,
        Like: true
      },{
        PostId: 3,
        UserId:3,
        Like: true
      },{
        PostId: 3,
        UserId:8,
        Like: true
      },{
        PostId: 3,
        UserId:7,
        Like: true
      },{
        PostId: 3,
        UserId:5,
        Like: true
      }]

   return queryInterface.bulkInsert('PostLikes',postLikeObj, {} )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('PostLikes', null, {})
  }
};
