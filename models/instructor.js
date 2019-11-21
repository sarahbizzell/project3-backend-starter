'use strict';
module.exports = (sequelize, DataTypes) => {
  const instructor = sequelize.define('instructor', {
    name: DataTypes.STRING,
    subject: DataTypes.STRING,
    grade_level: DataTypes.INTEGER
  }, {});
  instructor.associate = function(models) {
    // associations can be defined here
  };
  return instructor;
};