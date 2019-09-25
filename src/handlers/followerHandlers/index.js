const Follow = require("../../models/followingModel");

const retrieveFollowers = (req, res) => {
  const { user_id } = req.query;

  console.log(req.query);

  Follow.findAll({
    where: {
      user_id
    }
  })
    .then(followers => res.status(200).send(followers))
    .catch(err =>
      res.status(500).send(`There was a problem retrieving followers ${err}`)
    );
};

const addFollower = (req, res) => {
  const { user_id, following_id, date_created } = req.body;
  Follow.create({
    user_id,
    following_id,
    date_created
  })
    .then(() => res.status(200).send("Follower added"))
    .catch(err =>
      res.status(500).send(`There was a problem adding the follower ${err}`)
    );
};

module.exports = { retrieveFollowers, addFollower };
