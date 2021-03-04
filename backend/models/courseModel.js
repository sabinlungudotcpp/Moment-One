const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({

});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
