const chatModel = require('../models/chatModel');
const accountModel = require('../models/accountModel');

const deleteFromAccounts = async (chat) => {
    await accountModel.updateMany(
        {_id: {$in: chat.between}},
        {$pull: {chats: chat.id}}
    );
}

exports.getAllChats = async (request, response) => {
    try {
        if(request.method === 'GET') {
            const chats = await accountModel.findById(request.account.id).select('chats');
            return response.status(200).json(chats);
        }
    }
    catch(error) {
        if(error) {
            return response.status(500).json({
                message: error.message
            });
        }
    }
}

exports.getChatById = async (request, response) => {
    try{
        if(request.method === 'GET') {
            const chat = await chatModel.findById(request.params.id).populate('between', 'username')//.populate('messages').exec();

            if(!chat) {
                return response.status(404).json({
                    message: 'Chat not found'
                });
            }

            return response.status(200).json(chat);
        }
    }
    catch(error) {
        if(error) {
            return response.status(500).json({
                message: error.message
            });
        }
    }
}

exports.joinChat = async (request, response, next) => {
    try{
        if(request.method === 'POST') {            
            const accounts = [request.params.userId, request.account.id];
            const chat = await chatModel.findOne().where({between: accounts});
            
            if(!chat) {
                if(accounts.every( (val, i, arr) => val === arr[0] )) {
                    return response.status(422).json({
                        message: 'Can not start a chat with yourself'
                    });
                }
                
                const newChat = new chatModel({between: accounts});
                await newChat.save();
                
                await accountModel.updateMany(
                    {_id: {$in: accounts}},
                    {$push: {chats: newChat.id}}
                    );
                    
                    request.chatId = newChat.id;
                    next()
            }
            request.chatId = chat.id
            next()
        
        }
            
    }
    catch(error) {
        if(error) {
            return response.status(500).json({
                message: error.message
            });
        }
    }
}

exports.deleteChatByChatID = async (request, response) => {
    try{
        if(request.method === 'DELETE') {

            const chat = await chatModel.findByIdAndDelete(request.params.id);

            if(chat) {
                deleteFromAccounts(chat);

                return response.status(200).json({
                    message: 'Chat deleted'
                });
            }

            else {
                return response.status(404).json({
                    message: 'Chat not found'
                });
            } 
        }
    }
    catch(error) {
        if(error) {
            return response.status(500).json({
                message: error.message
            });
        }
    }
}

exports.deleteChatByUsers = async (request, response) => {
    try {
        if(request.method === 'DELETE') {

            const accounts = [request.params.id, request.account.id];
            const chat = await chatModel.findOneAndDelete().where({between: accounts});

            if(chat) {
                deleteFromAccounts(chat);
                return response.status(200).json({
                    message: 'Chat deleted'
                });
            }

            else {
                return response.status(404).json({
                    message: 'chat not found'
                });
            }
        }
    }

    catch(error) {
        
        if(error) {
            return response.status(500).json({
                message: error.message
            });
        }
    }
}