const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({ // Creates a course schema
    title: {
        type: String,
        required: [true, 'A course must have a title']
    },

    description: {
        type: String,
        required: [true, 'A post must have a description']
    },

    image: {
        type: String,
        required: [true, 'An image is not required for now']
    },

    isCompleted: {
        type: Boolean,
        default: false
    },

    inProgress: {
        type: Boolean,
        default: false
    },

    coursesCompleted: {
        type: Number
    }
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;