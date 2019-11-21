'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    
      return queryInterface.bulkInsert('questions', [
       
        {
       
          question:'What is the least popular programming language?',
          correct_answer: 'meow',
          incorrect_answer1:'c++',
          incorrect_answer2: 'Python',
          incorrect_answer3: 'JavaScript',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        question:'Which of these are not algorithms?',
          correct_answer: 'sequelize',
          incorrect_answer1:'divide-and-conquer',
          incorrect_answer2: 'sort',
          incorrect_answer3: 'making a peanut butter sandwich',
          createdAt: new Date(),
          updatedAt: new Date()
    },
    {
      
        question:'What is 2+2?',
          correct_answer: '4',
          incorrect_answer1:'7',
          incorrect_answer2: '8',
          incorrect_answer3: '3',
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
