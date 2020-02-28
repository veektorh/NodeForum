var body_parser = require('body-parser');
require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect:'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const initialize = (app) => {
    app.use(body_parser.urlencoded({ extended: false }))
    app.use(body_parser.json())
}

module.exports = {
    initialize
  }