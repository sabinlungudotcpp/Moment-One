const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
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

mongoose.model('Post', PostSchema);