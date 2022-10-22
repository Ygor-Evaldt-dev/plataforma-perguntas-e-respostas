// importar sequelize
const Sequelize = require('sequelize');

const database = 'db_perguntas_e_respostas';
const user = 'root';
const password = 'codeislife';
const hostAndSgbd = {
  host: 'localhost',
  dialect: 'mysql'
};

// fazer conexão com banco
const connection = new Sequelize(database, user, password, hostAndSgbd);

// exportar connection
module.exports = connection;