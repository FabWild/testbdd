'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING
  });

  user.associate = function(models) {
    // user.hasMany(models.chatbot);
    user.hasMany(models.chatbot, {through: 'user_has_chatbot', foreignKey: 'userId'});
  };

  return User;
};
