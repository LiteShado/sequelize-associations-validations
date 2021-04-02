'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('authors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        notEmpty: false,
        type: Sequelize.STRING
      },
      age: {
        isNumeric: false,
        min: -10,
        type: Sequelize.INTEGER
      },
      sex: {
        isIn: [['foo', 'bar']],
        type: Sequelize.STRING
      },
      email: {
        isEmail: true,
        type: Sequelize.STRING
      },
      website: {
        isUrl: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('authors');
  }
};
