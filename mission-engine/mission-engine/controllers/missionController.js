// missionController.js
const missionService = require('../services/missionService');

exports.createMission = async (req, res) => {
    try {
        const { title, description, reward } = req.body;
        const mission = await missionService.createMission(title, description, reward);
        res.status(201).json(mission);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.assignMission = async (req, res) => {
    try {
        const { missionId, userId } = req.body;
        const assignedMission = await missionService.assignMission(missionId, userId);
        res.status(200).json(assignedMission);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getMissions = async (req, res) => {
    try {
        const missions = await missionService.getMissions();
        res.status(200).json(missions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
