// Feedback.js
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comments: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
