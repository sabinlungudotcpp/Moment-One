const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },

    title: {
        type: String,
        unique: false,
        required: true
    },

    description: {
        type: String,
        unique: false,
        required: true
    }
});

mongoose.model('PostSchema', PostSchema);