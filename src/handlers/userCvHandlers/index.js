const UserCv = require('../../models/userCvModel');

const retrieveUserCvByUserId = (req, res) => {
    const user_id = req.query.userId;
    UserCv.findAll({
        where: {
            user_id
        }
    }).then(cv => res.status(200).send(cv))
        .catch(err => res.status(500).send(`There was a problem retrieving the cv: ${err}`));
};

const addUserCv = (req, res) => {
    const { skills, workplace_role, languages, user_id } = req.body;

    UserCv.create({
        skills,
        workplace_role,
        languages,
        user_id
    }).then(cv => res.status(200).send(cv))
        .catch(err => res.status(500).send(`There was a problem creating the UserCv: ${err}`));
};

module.exports = { retrieveUserCvByUserId, addUserCv };