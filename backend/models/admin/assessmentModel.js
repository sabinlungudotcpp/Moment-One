const mongoose = require('mongoose');
const Questions = mongoose.model('Questions');

const assessmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'An assessment must have a title']
    },

    questionData: [Questions]
});

const Assessment = mongoose.model('Assessment', assessmentSchema);
module.exports = Assessment; // Export the assessment module