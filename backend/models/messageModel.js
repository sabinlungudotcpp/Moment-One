//Message model for the momentone platform
const mongoose = require('mongoose');

const messages = mongoose.model('Message', new mongoose.Schema({

    message: {
        type: String,
        required: true
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    },

    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
    }
},
{
    timestamps: true
}));

module.exports = messages;