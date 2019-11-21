'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('quizzes', [
        {
        category: 'Science: Computers',
        difficulty:'easy',
        instructorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        category: 'Science: Computers',
        difficulty:'medium',
        instructorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Science: Computers',
        difficulty:'hard',
        instructorId: 3,
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
