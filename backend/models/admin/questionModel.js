const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({

});

const Questions = mongoose.model('Questions', questionSchema);
module.exports = Questions;
