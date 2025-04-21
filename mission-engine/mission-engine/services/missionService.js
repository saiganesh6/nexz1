// missionService.js
const Mission = require('../models/Mission');
const User = require('../models/User');

exports.createMission = async (title, description, reward) => {
    const newMission = new Mission({ title, description, reward });
    await newMission.save();
    return newMission;
};

exports.assignMission = async (missionId, userId) => {
    const mission = await Mission.findById(missionId);
    const user = await User.findById(userId);

    if (!mission || !user) throw new Error('Mission or User not found');

    mission.assignedTo = user._id;
    await mission.save();

    user.missionsAssigned.push(mission._id);
    await user.save();

    return mission;
};

exports.getMissions = async () => {
    const missions = await Mission.find().populate('assignedTo');
    return missions;
};
