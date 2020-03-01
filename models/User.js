

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        fname: DataTypes.STRING,
        password : DataTypes.TEXT,
        email : DataTypes.STRING,
        description: DataTypes.TEXT,
        image : DataTypes.TEXT
    }, {});
    User.associate = function(models) {
      // associations can be defined here
    };
    return User;
  };