const mongoose = require('mongoose');

const chat = mongoose.model('Chat', new mongoose.Schema({

    between: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    }],
    
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
},
{
    timestamps: true
}));

module.exports = chat;