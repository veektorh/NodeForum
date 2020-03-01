
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    title:{
      type : DataTypes.STRING,
      allowNull: false
    },
    body : DataTypes.TEXT,
    createdBy: {
      type: DataTypes.INTEGER,
      
    },
    upvotes : DataTypes.INTEGER,
    CommunityId: {
      type: DataTypes.INTEGER
    }
  }, {});
  Posts.associate = function(models) {
    // associations can be defined here
  };
  return Posts;
};