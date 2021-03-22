const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Discussion must contain a valid title']
    },

    content: {
        type: String,
        required: [true, 'A discussion must content']
    },

    date: {
        type: Date,
        required: [true, 'A discussion must have a date']
    },

    category: {
        type: String,
        required: [true, 'A discussion must have a valid category'],
        enum: ['Anxiety', 'Burnout', 'PTSD', 'Weight Loss', 'Depression', 'Self Care', 'Eating-Disorder']
    },

    likes: {
        type: Number,
        required: [false, 'Discussion must have likes']
    }
});

const DiscussionModel = mongoose.model('Discussion', discussionSchema); // Creates a discussion model to be exported
module.exports = DiscussionModel; // Export the model