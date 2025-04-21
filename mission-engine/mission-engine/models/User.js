// User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    missionsAssigned: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mission',
    }],
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', userSchema);
