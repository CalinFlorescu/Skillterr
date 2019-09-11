const Sequelize = require('sequelize');
const database = require('../config/database');

const Following = database.define('Followings', {
   date_created: {
       type: Sequelize.DATE,
       allowNull: false
   }
}, { timestamps: false });

module.exports = Following;