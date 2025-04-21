// feedbackRoutes.js
const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/submit', authMiddleware, feedbackController.submitFeedback);
router.get('/', feedbackController.getFeedback);

module.exports = router;
