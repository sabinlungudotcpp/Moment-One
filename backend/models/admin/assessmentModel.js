const mongoose = require('mongoose');
const Questions = require('./questionModel').schema;

const assessmentSchema = new mongoose.Schema({ // The assessment schema
    title: {
        type: String,
        required: [true, 'An assessment must have a title']
    },

    questions: [{type: mongoose.Schema.ObjectId, ref: 'questionSchema'}]
});

const Assessment = mongoose.model('Assessment', assessmentSchema);
module.exports = Assessment; // Export the assessment module