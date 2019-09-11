const Sequelize = require('sequelize');
const database = require('../config/database');

const Comment = database.define('Comments', {
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date_created: {
        type: Sequelize.DATE,
        allowNull: false
    },
    date_updated: {
        type: Sequelize.DATE
    }
}, { timestamps: false });

module.exports = Comment;