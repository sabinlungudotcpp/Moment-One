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
    },

    //The user that created the post
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
{
    //Adds createdAt and updatedAt timestamps for the post
    timestamps: true
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;