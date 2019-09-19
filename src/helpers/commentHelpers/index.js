const Comment = require("../../models/commentModel");
const jwtVerifier = require("../../utils/jwtVerification");

const getCommentsByPostId = (req, res) => {
  const { authorization, user_id } = req.headers;

  if (jwtVerifier(authorization, user_id)) {
    const { post_id } = req.body;
    Comment.findAll({
      where: {
        post_id
      }
    })
      .then(comments => res.status(200).send(comments))
      .catch(err =>
        console.log(`There was a problem retrieving comments: ${err}`)
      );
  } else {
    res.status(500).send("Invalid token or the token has expired");
  }
};

const addComment = (req, res) => {
  const { authorization, user_id } = req.headers;

  if (jwtVerifier(authorization, user_id)) {
    const { user_id, post_id, content, date_created, date_updated } = req.body;

    Comment.create({
      user_id,
      post_id,
      content,
      date_created,
      date_updated
    })
      .then(comm => res.status(200).send(comm))
      .catch(err =>
        console.log(`There was a problem creating the comment: ${err}`)
      );
  } else {
    res.status(500).send("Invalid token or the token has expired");
  }
};

module.exports = { getCommentsByPostId, addComment };
