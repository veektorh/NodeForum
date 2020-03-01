const Sequelize = require('sequelize');
const User = require('./User');


'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title:{
      type : Sequelize.STRING,
      allowNull: false
    },
    body : Sequelize.TEXT,
    createdBy: {
      type: Sequelize.INTEGER,
      
    },
    upvotes : Sequelize.INTEGER,
    CommunityId: {
      type: Sequelize.INTEGER
    }
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};