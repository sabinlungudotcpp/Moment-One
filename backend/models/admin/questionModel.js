const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({

    startingQuestion: { // The starting question for the assessment
        type: Boolean,

        questionText: { // The question text
            type: String, // Type is a string
            enum: ['What is your age ?', 'Have you had any suicidal thoughts ?', 'What is your gender?'], // Default questions starting with the age
            required: [true, 'Question must be provided'] // Field is required
        }
    },

    answers: {
        type: String,
        enum: [''],
        default: 'Yes'
        required: [true, 'You must provide an answer to the starting question']
    },

    nextQuestions: {
        type: String,
        required: [true, 'Next question must be provided']
    },

    outcome: {
        type: String,
        default: 'Lorem Ipsum',
        enum: ['We realized that the app may not suit your needs'],
        required: [true, 'Outcome must be provided']
    }
});

const Questions = mongoose.model('Questions', questionSchema);
module.exports = Questions; // Exports the question model