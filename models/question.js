'use strict';
module.exports = (sequelize, DataTypes) => {
  const question = sequelize.define('question', {
    question: DataTypes.STRING,
    correct_answer: DataTypes.STRING,
    incorrect_answer1: DataTypes.STRING,
    incorrect_answer2: DataTypes.STRING,
    incorrect_answer3: DataTypes.STRING,
    quizId: DataTypes.INTEGER
  }, {});
  question.associate = function(models) {
    question.belongsTo(models.quiz,{ foreignKey: 'quizId'})
  };
  return question;
};