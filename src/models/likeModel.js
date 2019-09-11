const Sequelize = require('sequelize');
const database = require('../config/database');

const Like = database.define('Likes', {
   date_created: {
       type: Sequelize.DATE,
       allowNull: false
   }
}, { timestamps: false });

module.exports = Like;