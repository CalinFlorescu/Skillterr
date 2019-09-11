const Sequelize = require('sequelize');
const database = require('../config/database');

const Message = database.define('Messages', {
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date_created: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, { timestamps: false });

module.exports = Message;