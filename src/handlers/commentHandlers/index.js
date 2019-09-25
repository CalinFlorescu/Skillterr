const Comment = require("../../models/commentModel");

const getCommentsByPostId = (req, res) => {
    const post_id = req.query.post_id;
    Comment.findAll({
      where: {
        post_id
      }
    }).then(comments => res.status(200).send(comments))
      .catch(err =>
        res.status(500).send(`There was a problem retrieving comments: ${err}`)
      );
};

const addComment = (req, res) => {
    const { user_id, post_id, content, date_created, date_updated } = req.body;

    Comment.create({
      user_id,
      post_id,
      content,
      date_created,
      date_updated
    }).then(comm => res.status(200).send(comm))
      .catch(err =>
        res.status(500).send(`There was a problem creating the comment: ${err}`)
      );
};

module.exports = { getCommentsByPostId, addComment };
