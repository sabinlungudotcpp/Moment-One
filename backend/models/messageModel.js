//Message model for the momentone platform
const mongoose = require('mongoose');
const chatModel = require('./chatModel');

const messageSchema = new mongoose.Schema({

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
});

messageSchema.post('save', async function() {
    //This function automatically adds messages to the chat they belong to
    try {
        const currentMessage = this;
        await chatModel.updateOne({_id: currentMessage.chat},{$push: {message: currentMessage.id}})
    }
    catch(error) {
        return console.error(error);
    }
})

module.exports = mongoose.model('Message', messageSchema);