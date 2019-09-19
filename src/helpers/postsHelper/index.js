const Post = require('../../models/postModel');
// const constants = require('../../constants');
const jwtVerifier = require('../../utils/jwtVerification');

const retrievePost = (req, res) => {
    const { authorization, user_id } = req.headers;

    if(jwtVerifier(authorization, user_id)) {
        Post.findAll().then(posts => res.status(200).send(posts))
            .catch(err => console.log(`Error retrieving the posts: ${err}`));
    } else {
        res.status(500).send('Invalid token or the token has expired');
    }
};

const createPost = (req, res) => {
    const { authorization, user_id } = req.headers;

    if(jwtVerifier(authorization, user_id)) {
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
        }).catch(err => console.log(`There was a problem creating a new post: ${err}`));
    } else {
        res.status(500).send('Invalid token or the token has expired');
    }
};

module.exports = { retrievePost, createPost };