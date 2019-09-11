const Sequelize = require('sequelize');
const db = require('../config/database');
const Comment = require('./commentModel');
const Like = require('./likeModel');

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
       type: Sequelize.DATE,
        allowNull: false
    }
}, {
    timestamps: false
});

Post.hasMany(Comment, {foreignKey: 'post_id'});
Post.hasMany(Like, {foreignKey: 'post_id'});

module.exports = Post;