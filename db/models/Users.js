

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        username: DataTypes.STRING,
        password : DataTypes.TEXT,
        email : DataTypes.STRING,
        image : DataTypes.TEXT
    }, {});
    Users.associate = function(models) {
      // associations can be defined here
    };
    return Users;
  };