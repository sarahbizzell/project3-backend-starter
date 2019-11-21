'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('instructors', [
        
      {
          name: 'Wah Wah',
          subject:'computer science',
          grade_level: 5,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        name: 'Ms. Cat',
        subject:'veterinary science',
        grade_level: 8,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      name: 'Mr. Miles',
      subject:'Gym',
      grade_level: 11,
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
