const jwt = require('jsonwebtoken');
const constants = require('../constants');

module.exports = (authorization, user_id) => {
    // Returns an error if the token expired
    try {
        const decoded = jwt.verify(authorization, constants.JWTTOKEN);
        return (decoded.userId === Number(user_id));
    } catch(err) {
        console.log('There was an error at jwt stage: ', err);
        return false;
    }
};