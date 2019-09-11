const User = require('../../models/userModel');
const encryptPassword = require('../../utils/passwordSecure');

const retrieveUserByName = (req, res) => {
    const username = req.url.substring(20, req.url.length);
    User.findAll({
        where: {
            username
        }
    }).then(user => res.send(user))
        .catch(err => console.log('User not found - error: ', err));
};

const addUser = (req, res) => {
    const {username, first_name, profile_picture_url, activation_key, last_name, email, city, gender, country, date_created, active, availability, description, encrypted_password} = req.body;

    const { hashedPassword, salt} = encryptPassword(encrypted_password);

    User.create({
        username,
        first_name,
        last_name,
        email,
        city,
        gender,
        country,
        date_created,
        active,
        activation_key,
        availability,
        description,
        'hashcode_value': hashedPassword,
        'salt_value': salt,
        profile_picture_url
    }).then(succes => {
        res.status(200).send(`Succes: ${succes}`);
    }).catch(err => console.log(`There was a problem creating a user: ${err}`));
};

module.exports = { retrieveUserByName, addUser };