const mongoose = require('mongoose');
const Questions = mongoose.model('Questions');

const assessmentSchema = new mongoose.Schema({

    questions: { // Assessment stores an array of questions
        type: String,
        questionData: [Questions],
        required: [true, 'In order to create an assessment, you must pass the question data']
    }
});

const Assessment = mongoose.model('Assessment', assessmentSchema);
module.exports = Assessment; // Export the assessment module