const crypto = require('crypto');
const randomstring = require('randomstring');

const key = '12345678123456781234567812345678';
const iv = crypto.randomBytes(16); // Initialization vector

const encryptingPassword = (password) => {
    const salt = randomstring.generate(8);
    let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let hashedPassword = cipher.update(salt+password, 'utf-8', 'hex');
    hashedPassword += cipher.final('hex');

    return { hashedPassword, salt };
};

const decryptingPassword = (encryptedPassword) => {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let originalPassword = decipher.update(encryptedPassword, 'hex', 'utf-8');
    originalPassword += decipher.final('utf-8');

    originalPassword = originalPassword.substring(8, originalPassword.length);

    return originalPassword;
};

module.exports = { encryptingPassword, decryptingPassword };