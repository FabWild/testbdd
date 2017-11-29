'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING
  });

  User.associate = function(models) {
    // user.hasMany(models.chatbot);
    User.hasMany(models.Chatbot);
  };

  return User;
};
