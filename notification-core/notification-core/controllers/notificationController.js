// notificationController.js
const notificationService = require('../services/notificationService');

exports.createNotification = async (req, res) => {
    try {
        const { userId, message, type } = req.body;
        const notification = await notificationService.createNotification(userId, message, type);
        res.status(201).json(notification);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUserNotifications = async (req, res) => {
    try {
        const { userId } = req.params;
        const notifications = await notificationService.getUserNotifications(userId);
        res.status(200).json(notifications);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
