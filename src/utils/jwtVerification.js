const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if(!req.path.startsWith('/login') && !req.path.startsWith('/add-user')) {
        try {
            const { authorization, user_id } = req.headers;
            // Returns an error if the token expired
            const decoded = jwt.verify(authorization, process.env.JWTTOKEN);
            if(decoded.userId === Number(user_id)) {
                next();
            } else {
                res.status(401).send(`You don't have access to authorize this page or your token has expired`);
            }
        } catch(err) {
            res.status(500).send('There was an error at jwt stage: ', err);
        }
    } else {
        next();
    }
};