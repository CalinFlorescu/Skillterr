const User = require('../../models/userModel');
const jwt = require('jsonwebtoken');
const constants = require('../../constants');
const jwtVerifier = require('../../utils/jwtVerification');
const { encryptingPassword, decryptingPassword } = require('../../utils/passwordSecure');

const logInUser = async (req, res) => {
    const { email, encrypted_password } = req.body;

    const retrievedUser = await User.findAll({
        where: {
            email
        }
    }).then(response => {
        return response[0].dataValues;
    }).catch(err => {
        res.status(500).send('Email not found: ', err);
    });

    const { hashcode_value, id } = retrievedUser;

    let decryptedPassword = '';

    try {
        decryptedPassword = decryptingPassword(hashcode_value);
    } catch(err) {
        console.log('There was a problem decrypting the pass:', err);
    }

    if(encrypted_password === decryptedPassword) {
        let token = '';
        try {
            token = jwt.sign({ userId: id}, constants.JWTTOKEN, { algorithm: 'HS256', expiresIn: '1h' });
        } catch(err) {
            console.log('Error at JWT: ', err);
        }
        res.status(200).send(token);
    } else {
        res.status(500).send('Incorrect Password.');
    }
};

const retrieveUserByName = (req, res) => {
    const { authorization, user_id } = req.headers;

    if(jwtVerifier(authorization, user_id)) {
        const username = req.url.substring(20, req.url.length);
        User.findAll({
            where: {
                username
            }
        }).then(user => res.send(user))
            .catch(err => console.log('User not found - error: ', err));
    } else {
        res.status(500).send('Invalid token or the token has expired');
    }
};

const addUser = (req, res) => {
    const {username, first_name, profile_picture_url, activation_key, last_name, email, city, gender, country, date_created, active, availability, description, encrypted_password} = req.body;

    const { hashedPassword, salt} = encryptingPassword(encrypted_password);

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

module.exports = { retrieveUserByName, addUser, logInUser };