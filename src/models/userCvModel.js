const Sequelize = require('sequelize');
const db = require('../config/database');

const UserCv = db.define('UsersCvs', {
    skills: {
        type: Sequelize.STRING,
        allowNull: false
    },
    workplace_role: {
        type: Sequelize.STRING,
        allowNull: false
    },
    languages: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = UserCv;