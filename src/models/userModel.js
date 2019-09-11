const Sequelize = require('sequelize');
const database = require('../config/database');
const UserCv = require('./userCvModel');
const Post = require('./postModel');

const User = database.define('Users', {
    // attributes
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
    },
    gender: {
        type: Sequelize.STRING,
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date_created: {
        type: Sequelize.STRING,
        allowNull: false
    },
    active: {
        type: Sequelize.STRING,
        allowNull: false
    },
    availability: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
    },
    hashcode_value: {
        type: Sequelize.STRING,
        allowNull: false
    },
    salt_value: {
        type: Sequelize.STRING,
        allowNull: false
    },
    activation_key: {
        type: Sequelize.STRING,
        allowNull: false
    },
    profile_picture_url: {
        type: Sequelize.STRING,
    },
}, {
    timestamps: false,
});

User.hasOne(UserCv, { foreignKey: 'user_id'});
User.hasMany(Post, {foreignKey: 'user_id'});

module.exports = User;