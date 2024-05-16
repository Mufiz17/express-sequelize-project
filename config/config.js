require('dotenv').config();

const {
    DB_USERNAME,
    DB_NAME,
    DB_PASSWORD,
    DB_HOSTNAME
} = process.env;

module.exports = {
    "development": {
        "username": "DB_USERNAME",
        "password": null,
        "database": "database_development",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        "username": "DB_USERNAME",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "DB_USERNAME",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}