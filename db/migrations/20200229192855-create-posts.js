'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title:{
        type : Sequelize.STRING,
        allowNull: false
      },
      body : Sequelize.TEXT,
      createdBy: {
        type: Sequelize.INTEGER,
        references: {      
          model: "Users",
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      upvotes : Sequelize.INTEGER,
      CommunityId: {
        type: Sequelize.INTEGER,
        references: {      
          model: "Communities",
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts');
  }
};