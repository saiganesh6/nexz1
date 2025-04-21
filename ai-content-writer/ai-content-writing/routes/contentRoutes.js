// contentRoutes.js
const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/generate-content', authMiddleware, contentController.generateContent);

module.exports = router;
