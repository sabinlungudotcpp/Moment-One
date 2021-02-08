const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },

    title: { // Title of the post
        type: String,
        unique: false,
        required: true
    },

    description: { // Description of the post
        type: String,
        unique: false,
        required: true
    }
});

mongoose.model('PostSchema', PostSchema);