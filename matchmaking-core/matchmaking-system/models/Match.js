// Match.js
const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    userId1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    userId2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    criteria: {
        type: String,
        required: true,
    },
    dateMatched: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Match', matchSchema);
