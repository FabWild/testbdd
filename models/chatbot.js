'use strict';
module.exports = (sequelize, DataTypes) => {
  var Chatbot = sequelize.define('Chatbot', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    urlapi: DataTypes.STRING
  });

  Chatbot.associate = function(models) {
    // associations can be defined here
    // chatbot.belongsTo(models.user);
    Chatbot.belongsTo(models.User);
  };

  return Chatbot;
};
