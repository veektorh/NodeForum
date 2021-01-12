var body_parser = require('body-parser');
const env = require('../env');
const logger = require('morgan');
const db = require('./db');
require('express-async-errors');


const initialize = (app) => {
    app.use(body_parser.urlencoded({ extended: false }));
    app.use(body_parser.json());
    app.use(logger('dev'));
    db.initialize();
    app.listen(env.PORT, function () {
        console.log(`server is running on port ${env.PORT}` )
    });
}

module.exports = {
    initialize
  }