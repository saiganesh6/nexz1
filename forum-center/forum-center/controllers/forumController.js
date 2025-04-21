// forumController.js
const forumService = require('../services/forumService');

exports.createTopic = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTopic = await forumService.createTopic(title, description);
        res.status(201).json(newTopic);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getTopics = async (req, res) => {
    try {
        const topics = await forumService.getTopics();
        res.status(200).json(topics);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addPost = async (req, res) => {
    try {
        const { topicId, content } = req.body;
        const newPost = await forumService.addPost(req.user.userId, topicId, content);
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
