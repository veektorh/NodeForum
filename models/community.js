'use strict';
module.exports = (sequelize, DataTypes) => {
  const Community = sequelize.define('Community', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {});
  Community.associate = function(models) {
    // associations can be defined here
  };
  return Community;
};