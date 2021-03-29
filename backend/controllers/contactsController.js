const accountModel = require('../models/accountModel');
const chatModel = require('../models/chatModel');
const messageModel = require('../models/messageModel');

exports.getAllContacts = async (request, response) => {
    try {
        if(request.method === 'GET') {
            const allContacts = await accountModel.findById(request.account.id,{type: 0, _id: 0, contacts: 1}).populate('contacts.user', 'username');
            const test = await accountModel.findById(request.account.id, {type: 0, _id: 0, contacts: 1}).populate('contacts.user');
            console.log(test.contacts.user)
            if(!allContacts.contacts) {
                return response.status(404).json({
                    message: 'No contacts found'
                });
            }

            return response.status(200).json(allContacts.contacts);
        }
    }
    catch(error) {
        return response.status(500).json({message: error.message});
    }
}

exports.deleteContact = async (request, response) => {
    try {
        if(request.method === 'DELETE') {
            //First we remove the chat between the two users
            const chat = await chatModel.findOneAndDelete({between: [request.params.id, request.account.id]});
            //Then we remove the contact referance in the account models
            await accountModel.updateMany(
                {contacts: {$elemMatch: {chat: chat.id}}},
                {$pull: {contacts: {chat: chat.id}}}
            );

            //Then we check for messages and delete them if presesnt
            if(chat.messages.length !== 0) {
                await messageModel.findByIdAndDelete({id: {$in: chat.messages}});
            }

            return response.status(200).json({message: 'Contact Deleted'})
        }
    }
    catch(error) {
        return response.status(500).json({message: error.message});
    }
}