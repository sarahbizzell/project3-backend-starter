'use strict';
module.exports = (sequelize, DataTypes) => {
  const quiz = sequelize.define('quiz', {
    category: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    instructorId: DataTypes.INTEGER
  }, {});
  quiz.associate = function(models) {
   quiz.belongsTo(models.instructor,{ foreignKey: 'instructorId'})
   quiz.hasMany(models.question,{foreignKey: 'quizId'})
  };
  return quiz;
};