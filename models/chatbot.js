'use strict';
module.exports = (sequelize, DataTypes) => {
  var Chatbot = sequelize.define('Chatbot', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    urlapi: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        chatbot.belongsTo(models.user);
      }
    }
  });
  return Chatbot;
};
