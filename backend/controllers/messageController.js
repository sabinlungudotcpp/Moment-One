const messageModel = require('../models/messageModel');
const chatModel = require('../models/chatModel');

exports.createMessageIo = async (chatId, userId, content) => {
    //This is the create a message functtion for socket.io
    //To implement a live chat version
    try {
        const newMessage = new messageModel({
            chat: chatId,
            createdBy: userId,
            message: content 
        });

        await newMessage.save();
        return newMessage
    }
    catch(error) {
        return console.error(error)
    }
}
exports.createMessage = async (request, response) => {
    try {
        //Check the request method
        if (request.method === 'POST') {
            //Created the message
            const newMessage = new messageModel({
                chat: request.params.id, 
                createdBy: request.account.id,
                message: request.body.message
            });

            await newMessage.save()
            return response.status(200).json(newMessage);
        }
    }
    catch(error) {
        return response.status(500).json({message: error.message});
    }
}

exports.getAllMessages = async (request, response) => {
    try {
        if (request.method === 'GET') {
            const messages = await messageModel.find({chat: request.params.id});
            return response.status(200).json(messages);
        }
    }
    catch(error) {
        return response.status(500).json({message: error.message});
    }
}

exports.deleteMessage = async (request, response) => {
    try {
        //Check the request method
        if(request.method === 'DELETE') {
            //First deletes the message
            const message = await messageModel.findOneAndDelete({_id: request.params.id});

            //Then remove the referance in the chat model
            await chatModel.updateOne({_id: message.chat},{$pull: {messages: message.id}});
            
            return response.status(200).json({
                message: 'Message deleted'
            });
        }
    }
    catch(error) {
        return response.status(500).json({message: error.message});
    }
}

exports.editMessage = async (request, response) => {
    try {
        //Check the request method
        if(request.method === 'PATCH') {
            const updatedMessage = await messageModel.updateOne({_id: request.params.id},{message: request.body},{new: true});
            return response.status(200).json({updatedMessage});
        }
    }
    catch(error) {
        return response.status(500).json({message: error.message});
    }
}