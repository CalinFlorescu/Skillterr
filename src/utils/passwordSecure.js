const crypto = require('crypto');
const randomstring = require('randomstring');

const key = 'abcdefghijklmnopqrstuvwx';

const encryptingPassword = (password) => {
    const salt = randomstring.generate(8);
    let cipher = crypto.createCipheriv('des-ede3', key, "");
    let hashedPassword = cipher.update(salt+password, 'utf8', 'base64');
    hashedPassword += cipher.final('base64');

    return { hashedPassword, salt };
};

const decryptingPassword = (encryptedPassword) => {
    const decipher = crypto.createDecipheriv('des-ede3', key, "");
    let originalPassword = decipher.update(encryptedPassword, 'base64', 'utf8');
    originalPassword += decipher.final('utf8');

    originalPassword = originalPassword.substring(8, originalPassword.length);

    return originalPassword;
};

module.exports = { encryptingPassword, decryptingPassword };