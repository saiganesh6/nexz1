// contentController.js
const contentService = require('../services/contentService');

exports.generateContent = async (req, res) => {
    try {
        const { topic } = req.body;
        const content = await contentService.generateContent(topic);
        res.status(200).json({ content });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.generateContentWithContext = async (req, res) => {
    try {
        const { topic, context } = req.body;
        const content = await contentService.generateContentWithContext(topic, context);
        res.status(200).json({ content });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.generateContentWithContextAndHistory = async (req, res) => {
    try {
        const { topic, context, history } = req.body;
        const content = await contentService.generateContentWithContextAndHistory(topic, context, history);
        res.status(200).json({ content });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};