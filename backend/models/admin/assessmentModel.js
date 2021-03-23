const mongoose = require('mongoose');
const Questions = mongoose.model('Questions');

const assessmentSchema = new mongoose.Schema({
    
    questions: {
        questionData: [Questions]
    }
});

const Assessment = mongoose.model('Assessment', assessmentSchema);
module.exports = Assessment;