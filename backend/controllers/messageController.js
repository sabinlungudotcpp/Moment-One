const messageModel = require('../models/messageModel');
const chatModel = require('../models/chatModel');

exports.createMessage = async (chatId, userId, content) => {
    try {
        const newMessage = new messageModel({
            chat: chatId,
            createdBy: userId,
            message: content 
        });

        await newMessage.save();
        await chatModel.findByIdAndUpdate({_id: chatId},{$push: {messages: newMessage.id}});
        return newMessage
    }
    catch(error) {
        return console.error(error)
    }
}