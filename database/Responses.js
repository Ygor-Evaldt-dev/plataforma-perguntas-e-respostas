const Sequelize = require('sequelize');
const connection = require('./connection');

const Responses = connection.define('Responses', {
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  question_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Responses.sync({force: false});
module.exports = Responses;