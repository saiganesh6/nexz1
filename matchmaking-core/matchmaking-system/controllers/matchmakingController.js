// matchmakingController.js
const matchmakingService = require('../services/matchmakingService');

exports.findMatch = async (req, res) => {
    try {
        const { userId, criteria } = req.body;
        const match = await matchmakingService.findMatch(userId, criteria);
        res.status(200).json(match);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getMatchHistory = async (req, res) => {
    try {
        const matchHistory = await matchmakingService.getMatchHistory(req.user.userId);
        res.status(200).json(matchHistory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
