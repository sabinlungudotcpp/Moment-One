const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
    title: {
        type: String
    },

    category: {
        type: String,
        enum: ['Anxiety', 'Burnout', 'PTSD', 'Weight Loss', 'Depression', 'Self Care', 'Eating-Disorder']
    },

    description: { // The description of the discussion
        type: String
    },

    isLiked: {
        type: Boolean,
        default: false
    }
});

const DiscussionModel = mongoose.model('Discussion', discussionSchema);
module.exports = DiscussionModel; // Export the model