const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({

    startingQuestion: {
        type: Boolean,

        questionText: {
            id: Number,
            type: String,
            enum: ['What is your age ?', 'Have you had any suicidal thoughts ?'],
            required: [true, 'Question text must be provided']
        }
    },

    answers: {
       
    },

    outcome: {

    }
});

const Questions = mongoose.model('Questions', questionSchema);
module.exports = Questions; // Exports the question model