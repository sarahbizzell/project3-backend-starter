'use strict';
module.exports = (sequelize, DataTypes) => {
  const quiz = sequelize.define('quiz', {
    category: DataTypes.STRING,
    difficulty: DataTypes.STRING
  }, {});
  quiz.associate = function(models) {
    // associations can be defined here
  };
  return quiz;
};