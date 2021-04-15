const mongoose = require('mongoose');
const accountModel = require('./accountModel');

const chatSchema = new mongoose.Schema({

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
});


chatSchema.post('save', async function() {
    try {
        const currentChat = this;
        const [userOne, userTwo] = currentChat.between;

        await accountModel.findByIdAndUpdate(userOne, {
            $push: {
                contacts: {
                    user: userTwo,
                    chat: currentChat.id
                }
            }
        });
        await accountModel.findByIdAndUpdate(userTwo, {
            $push: {
                contacts: {
                    user: userOne,
                    chat: currentChat.id
                }
            }
        });

    }
    catch(error) {
        return console.error(error);
    }
})

module.exports = mongoose.model('Chat', chatSchema);