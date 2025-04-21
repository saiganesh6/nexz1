// forumService.js
const Forum = require('../models/Forum');

exports.createTopic = async (title, description) => {
    const newTopic = new Forum({ title, description });
    await newTopic.save();
    return newTopic;
};

exports.getTopics = async () => {
    const topics = await Forum.find();
    return topics;
};

exports.addPost = async (userId, topicId, content) => {
    const topic = await Forum.findById(topicId);
    if (!topic) throw new Error('Topic not found');
    
    const newPost = { userId, content };
    topic.posts.push(newPost);
    await topic.save();

    return newPost;
};
