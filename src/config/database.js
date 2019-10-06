const Sequelize = require("sequelize");

const database = new Sequelize(
  "skillterr_db",
  "root",
  "...",
  {
    host: "localhost",
    dialect: "mysql"
  },
  {
    pool: {
      max: 5,
      min: 0,
      Sequelizeacquire: 30000,
      idle: 10000
    }
  }
);

module.exports = database;
