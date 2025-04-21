// matchmakingService.js
const Match = require('../models/Match');
const User = require('../models/User');

exports.findMatch = async (userId, criteria) => {
    // Find users who meet the criteria (e.g., shared interests)
    const user = await User.findById(userId);
    if (!user) throw new Error('User not found');

    const potentialMatches = await User.find({
        _id: { $ne: userId },  // Exclude current user
        interests: { $in: user.interests },  // Match based on shared interests
    });

    if (potentialMatches.length === 0) throw new Error('No matches found');

    // Match with the first found user
    const matchedUser = potentialMatches[0];
    
    // Save match to database
    const newMatch = new Match({
        userId1: userId,
        userId2: matchedUser._id,
        criteria,
    });

    await newMatch.save();
    return newMatch;
};

exports.getMatchHistory = async (userId) => {
    const matches = await Match.find({
        $or: [{ userId1: userId }, { userId2: userId }],
    }).populate('userId1 userId2', 'email interests');
    return matches;
};
