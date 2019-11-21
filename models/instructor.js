'use strict';
module.exports = (sequelize, DataTypes) => {
  const instructor = sequelize.define('instructor', {
    name: DataTypes.STRING,
    subject: DataTypes.STRING,
    grade_level: DataTypes.INTEGER
  }, {});
  instructor.associate = function(models) {
    instructor.hasMany(models.quiz,{foreignKey: 'instructorId'})
  };
  return instructor;
};