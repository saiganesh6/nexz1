// tokenService.js
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.generateToken = (userId) => {
    return jwt.sign({ userId }, config.jwtSecret, { expiresIn: '1h' });
};

exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, config.jwtSecret);
    } catch (error) {
        throw new Error('Invalid or expired token');
    }
};
