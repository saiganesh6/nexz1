// matchmakingRoutes.js
const express = require('express');
const router = express.Router();
const matchmakingController = require('../controllers/matchmakingController');
const authMiddleware = require('../middlewares/authMiddleware');

// Matchmaking routes
router.post('/find-match', authMiddleware, matchmakingController.findMatch);
router.get('/match-history', authMiddleware, matchmakingController.getMatchHistory);

module.exports = router;
