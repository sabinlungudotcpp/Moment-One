const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const assessmentSchema = new Schema({ // The assessment schema
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Questions'
    }]
});

const Assessment = mongoose.model('Assessment', assessmentSchema);
module.exports = Assessment; // Export the assessment module