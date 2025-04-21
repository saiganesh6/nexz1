// userController.js
const authService = require('../services/authService');

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await authService.register(email, password);
        res.status(201).json({ user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await authService.login(email, password);
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
