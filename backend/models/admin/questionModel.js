const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({

    questionText: {
        type: String,
        enum: ['Have you ever had suicidal thoughts?'],
        required: [true, 'Question must be present']
    },

    age: {
        type: String,
        enum: ['6-18', '18-35', '35-60', '60+'],
        required: [true, 'You must provide an age']
    },

    gender: {
        type: String,
        enum: ['Male', 'Female', 'Non-Binary'],
        required: [true, 'A gender is required']
    },

    answerText: {
        type: String,
        enum: ['Yes', 'No', 'Potentially'],
        required: [true, 'You must provide an answer to the question']
    }
});

const Questions = mongoose.model('Questions', questionSchema);
module.exports = Questions; // Exports the question model