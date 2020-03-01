var body_parser = require('body-parser');
require('dotenv').config();
const logger = require('morgan');
const db = require('./db');


const initialize = (app) => {
    app.use(body_parser.urlencoded({ extended: false }));
    app.use(body_parser.json());
    app.use(logger('dev'));
    db.initialize();
}

module.exports = {
    initialize
  }