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
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Joko Tingkir',
        password: '12345',
        email: 'joko@mail.com',
        reputasi: 1.5
      },
      {
        username: 'christian',
        password: '7bd33ae4351dffa413613687a3d545ca7af0e23472d656d8e9081d19df4a38f9',
        secret: 'cc80e157006998e35cd96f7ca6c955863e47bb7c334d0889209a3d9df3f5ea8f35a4f4403e3d6a4a',
        email: 'christiansihotang23@yahoo.co.id',
        reputasi: 2,
        role:"admin"
      },
      {
        username: 'Pak Kumis',
        password: '54321',
        email: 'kumis@mail.com',
        reputasi: 7.5
      },
      {
        username: 'Tony Hawk',
        password: '54213',
        email: 'tony@mail.com',
        reputasi: 3.5
      },
      {
        username: 'Solid Snake',
        password: '33333',
        email: 'solid@mail.com',
        reputasi: 5.5
      },
      {
        username: 'Hwoarang',
        password: '33333',
        email: 'solid@mail.com',
        reputasi: 7.5
      },
      {
        username: 'Seo Hyun',
        password: '33333',
        email: 'solid@mail.com',
        reputasi: 8.5
      },
      {
        username: 'Ntona Sobinowi',
        password: '11111',
        email: 'ntona@mail.com',
        reputasi: 3.5
      },
      {
        username: 'Lionel Messi',
        password: '77777',
        email: 'lionel@mail.com',
        reputasi: 5.6
      },
      {
        username: 'Timon',
        password: '11333',
        email: 'timon@mail.com',
        reputasi: 4.5
      },
      {
        username: 'Alberto Mamamia',
        password: '78911',
        email: 'alberto@mail.com',
        reputasi: 5.9
      },
      {
        username: 'Pumba',
        password: '78199',
        email: 'pumba@mail.com',
        reputasi: 6.9
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {})
  }
};
