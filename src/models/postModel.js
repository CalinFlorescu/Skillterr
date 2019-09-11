const Sequelize = require('sequelize');
const db = require('../config/database');

const Post = db.define('Posts', {
    description: {
       type: Sequelize.STRING,
        allowNull: false
    },
    title: {
       type: Sequelize.STRING,
        allowNull: false
    },
    post_type: {
       type: Sequelize.STRING,
        allowNull: false
    },
    tags: {
       type: Sequelize.STRING
    },
    price: {
       type: Sequelize.INTEGER,
        allowNull: false
    },
    date_created: {
       type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Post;