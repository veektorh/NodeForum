const env = require('../env');

module.exports = {
    "development": {
        "username": env.DB_USER,
        "password": env.DB_PASS,
        "database": env.DB_NAME,
        "host": env.DB_HOST,
        "dialect": env.DB_DIALECT
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
    }
}