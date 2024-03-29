// Requres dotenv package to use .env file
require('dotenv').config();

const Sequelize = require('sequelize');

// Creates connection to database
// If deployed, uses JawsDB, otherwise uses local database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
