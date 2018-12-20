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
   let objPostTage = [{
     PostId: 1,
     TagId:1
   },{
    PostId: 1,
    TagId:2
  },{
    PostId: 1,
    TagId:4
  },{
    PostId: 2,
    TagId:1
  },{
    PostId: 2,
    TagId:6
  },{
    PostId: 3,
    TagId:1
  },{
    PostId: 3,
    TagId:5
  }]
  return queryInterface.bulkInsert('PostTags', objPostTage, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('PostTags', null, {})
  }
};
