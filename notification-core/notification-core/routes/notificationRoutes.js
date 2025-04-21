// notificationRoutes.js
const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const authMiddleware = require('../middlewares/authMiddleware');

// Notification routes
router.post('/create', authMiddleware, notificationController.createNotification);
router.get('/user/:userId', authMiddleware, notificationController.getUserNotifications);

module.exports = router;
