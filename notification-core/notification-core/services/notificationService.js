// notificationService.js
const Notification = require('../models/Notification');

exports.createNotification = async (userId, message, type) => {
    const newNotification = new Notification({
        userId,
        message,
        type,
    });
    await newNotification.save();
    return newNotification;
};

exports.getUserNotifications = async (userId) => {
    const notifications = await Notification.find({ userId }).sort({ dateCreated: -1 });
    return notifications;
};

exports.sendNotification = async (notificationId) => {
    const notification = await Notification.findById(notificationId);

    if (!notification) throw new Error('Notification not found');

    // Simulate sending notification
    console.log(`Sending ${notification.type} notification: ${notification.message}`);
    
    // Update notification status to 'sent'
    notification.status = 'sent';
    await notification.save();

    return notification;
};
