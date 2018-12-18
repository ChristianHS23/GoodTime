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
   let objTag = [{
     name: 'Adventure'
   },{
    name: 'RPG'
  },{
    name: 'RTS'
  },{
    name: 'Action'
  },{
    name: 'Fighting'
  },{
    name: 'MMORPG'
  }]
   return queryInterface.bulkInsert('Tags', objTag, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete(`Tags`, null, {})
  }
};
