// feedbackService.js
const Feedback = require('../models/Feedback');

exports.submitFeedback = async (userId, rating, comments) => {
    const feedback = new Feedback({ userId, rating, comments });
    await feedback.save();
    return feedback;
};

exports.getFeedback = async () => {
    const feedback = await Feedback.find().populate('userId', 'email');
    return feedback;
};
