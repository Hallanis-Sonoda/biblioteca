require('dotenv').config();

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: '3306',
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }};