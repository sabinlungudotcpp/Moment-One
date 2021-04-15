const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const questionSchema = new Schema({

    startingQuestion: { // The starting question for the assessment
        type: String, // Type is a string
        enum: ['How old are you ?', 'Have you had any suicidal thoughts ?', 'What is your gender?'], // Default questions starting with the age
        required: [true, 'Question must be provided'] // Field is required
    },

      answer: {
        type: String,
        enum: ['6-18'],
        default: 'No',
        required: [true, 'You must provide an answer to the starting question']
    },

    nextQuestion: {
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
module.exports = Questions;