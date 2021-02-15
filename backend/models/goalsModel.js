const mongoose = require('mongoose');
const GoalSchema = new mongoose.Schema({
    goal: {
        type: String,
        required: [true, 'A goal should be present']
    },

    reason: {
        type: String,
        required: [true, 'A goal must have a reason']
    },

    length: {
        type: Number,
        min: 2,
        max: 60,
        required: [true, 'A goal must have a length between 2 and 60 days']
    },

    reward: {
        type: String,
        required: [true, 'A goal should have a reward']
    }
})