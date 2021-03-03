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
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    postedOn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
},
{
    timestamps: true
});

const Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;