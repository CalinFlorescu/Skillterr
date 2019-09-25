const Post = require('../../models/postModel');

const retrievePost = (req, res) => {
    Post.findAll().then(posts => res.status(200).send(posts))
        .catch(err => res.status(500).send(`Error retrieving the posts: ${err}`));
};

const createPost = (req, res) => {
    const { description, title, post_type, tags, price, date_created } = req.body;

    Post.create({
        user_id,
        description,
        title,
        post_type,
        tags,
        price,
        date_created
    }).then(success => {
        res.status(200).send(`Success: ${success}`);
    }).catch(err => res.status(500).send(`There was a problem creating a new post: ${err}`));
};

module.exports = { retrievePost, createPost };