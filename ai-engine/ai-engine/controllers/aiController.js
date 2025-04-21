// aiController.js
const aiService = require('../services/aiService');

exports.getAIResponse = async (req, res) => {
    try {
        const response = await aiService.getAIResponse(req.body);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.getAIResponseWithContext = async (req, res) => {
    try {
        const response = await aiService.getAIResponseWithContext(req.body);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.getAIResponseWithContextAndHistory = async (req, res) => {
    try {
        const response = await aiService.getAIResponseWithContextAndHistory(req.body);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};