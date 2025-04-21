// aiService.js
const axios = require('axios');  // assuming you'd use an AI API

exports.getAIResponse = async (data) => {
    try {
        // Example AI API call (replace with actual AI logic)
        const response = await axios.post('https://ai-api.com/respond', {
            input: data.input,
        });

        return response.data;
    } catch (err) {
        throw new Error('Failed to fetch AI response');
    }
};
