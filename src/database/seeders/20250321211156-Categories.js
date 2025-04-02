'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Categories',
        [{
       name: 'Deportes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aventura',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ],
       {});
    
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
