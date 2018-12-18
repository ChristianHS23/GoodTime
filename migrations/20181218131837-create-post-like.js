'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PostLikes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PostId: {
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      Like: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValues: new Date
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValues: new Date
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PostLikes');
  }
};