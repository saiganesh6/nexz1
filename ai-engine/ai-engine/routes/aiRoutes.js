// aiRoutes.js
const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/ai-response', authMiddleware, aiController.getAIResponse);

module.exports = router;
