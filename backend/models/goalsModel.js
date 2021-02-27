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
        minlength: 2,
        maxlength: 60,
        required: [true, 'A goal must have a length between 2 and 60 days']
    },

    reward: {
        type: String,
        required: [true, 'A goal should have a reward']
    }
});

mongoose.model('Goals', GoalSchema);