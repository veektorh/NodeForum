'use strict';
module.exports = (sequelize, DataTypes) => {
  const Communities = sequelize.define('Communities', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {});
  Communities.associate = function(models) {
    // associations can be defined here
  };
  return Communities;
};