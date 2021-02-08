const mongoose = require('mongoose');
const commentsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: false
    },

    description: {
        type: String,
        required: true,
        unique: false
    }
});

mongoose.model('Comments', commentsSchema);