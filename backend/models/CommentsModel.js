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

    //Store _id for the Account that created the comment
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    },

    //Store _id for the Post the comment was posted on 
    postedOn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
},
{
    //createdAt and updatedAt time stamps
    timestamps: true
});

const Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;