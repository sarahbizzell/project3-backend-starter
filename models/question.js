'use strict';
module.exports = (sequelize, DataTypes) => {
  const question = sequelize.define('question', {
    question: DataTypes.STRING,
    correct_answer: DataTypes.STRING,
    incorrect_answer1: DataTypes.STRING,
    incorrect_answer2: DataTypes.STRING,
    incorrect_answer3: DataTypes.STRING
  }, {});
  question.associate = function(models) {
    // associations can be defined here
  };
  return question;
};