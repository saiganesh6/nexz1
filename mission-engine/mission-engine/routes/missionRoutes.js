// missionRoutes.js
const express = require('express');
const router = express.Router();
const missionController = require('../controllers/missionController');
const authMiddleware = require('../middlewares/authMiddleware');

// Mission routes
router.post('/create', authMiddleware, missionController.createMission);
router.post('/assign', authMiddleware, missionController.assignMission);
router.get('/', authMiddleware, missionController.getMissions);

module.exports = router;
