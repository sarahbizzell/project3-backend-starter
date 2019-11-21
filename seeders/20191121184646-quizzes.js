'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('quizzes', [
        {
        category: 'Science: Computers',
        difficulty:'easy',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        category: 'Science: Computers',
        difficulty:'medium',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Science: Computers',
        difficulty:'hard',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
