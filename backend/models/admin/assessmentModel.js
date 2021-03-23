const mongoose = require('mongoose');
const Questions = mongoose.model('Questions');

const assessmentSchema = new mongoose.Schema({

    questions: { // Assessment stores an array of questions
        type: String,
        questionData: [Questions]
    }
});

const Assessment = mongoose.model('Assessment', assessmentSchema);
module.exports = Assessment; // Export the assessment module