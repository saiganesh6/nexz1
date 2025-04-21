// forumRoutes.js
const express = require('express');
const router = express.Router();
const forumController = require('../controllers/forumController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/create-topic', authMiddleware, forumController.createTopic);
router.get('/topics', forumController.getTopics);
router.post('/add-post', authMiddleware, forumController.addPost);

module.exports = router;
