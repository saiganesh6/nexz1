// feedbackController.js
const feedbackService = require('../services/feedbackService');

exports.submitFeedback = async (req, res) => {
    try {
        const { userId, rating, comments } = req.body;
        const feedback = await feedbackService.submitFeedback(userId, rating, comments);
        res.status(201).json(feedback);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getFeedback = async (req, res) => {
    try {
        const feedback = await feedbackService.getFeedback();
        res.status(200).json(feedback);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
