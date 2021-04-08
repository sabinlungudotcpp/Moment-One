const accountModel = require('../models/accountModel');
const chatModel = require('../models/chatModel');
const messageModel = require('../models/messageModel');
const okCode = 200;
const notFound = 404;
const serverError = 500;

/**
 * @author: Sabin Constantin Lungu
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @function: getAllContacts(request, response)
 * @returns: Returns all of the contacts with a 200 OK status code
 * @description: 1. If there is a GET request the function will find an 1 contact account by its ID and populates it with usernames in the contact chat by selecting the messages and sorting them with a limit of 1
 * @description: 2. If there are no contacts, returns a 404 not found response
 */

exports.getAllContacts = async (request, response) => {
    try {

        if(request.method === 'GET') {

            const allContacts = await accountModel.findById(request.account.id,{type: 0, _id: 0, contacts: 1}).populate('contacts.user', 'username').populate({
                path: 'contacts.chat',
                select: 'messages',

                populate: {
                    path: 'messages',
                    select: 'message createdBy createdAt',
                    options: {
                        sort: {'createdAt': -1},
                        limit: 1
                    }
                    
                }
            });

            if(!allContacts.contacts) {
                return response.status(notFound).json({
                    message: 'No contacts found'
                });
            }

            return response.status(okCode).json(allContacts.contacts);
        }
    }

    catch(error) {
        return response.status(serverError).json({message: error.message});
    }
}

/**
 * @author: Sabin Constantin Lungu
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @function: deleteContact(request, response)
 * @returns: Returns all of the contacts with a 200 OK status code
 * @description: 1. Exported controller function that checks if there is a DELETE request, it finds one chat to delete between a given id and an account id, then it updates the account model by the contacts
 * @description: 2. If the length of the chat messages is not 0, it finds a message and deletes it in the chat then returns a contact
 */

exports.deleteContact = async (request, response) => {

    try {
        if(request.method === 'DELETE') {
            const chat = await chatModel.findOneAndDelete({between: [request.params.id, request.account.id]});

            await accountModel.updateMany(
                {contacts: {$elemMatch: {chat: chat.id}}},
                {$pull: {contacts: {chat: chat.id}}}
            );

            if(chat.messages.length !== 0) {
                await messageModel.findByIdAndDelete({id: {$in: chat.messages}});
            }

            return response.status(okCode).json({message: 'Contact Deleted'})
        }
    }

    catch(error) {
        return response.status(serverError).json({message: error.message});
    }
}

/**
 * @author: Sabin Constantin Lungu
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @function: testCreateAMessage(request, response)
 * @returns: A message created with a 200 OK status code if the creation was successful
 * @description: 1. Creates a new message from the model by storing the id of the chat, who it was created by and the message, then saves it to the database.
 * @description: 2. After saving it finds a chat by ID and updates it.
 */

exports.testCreateAMessage = async (request, response) => {


    try {
        const newMessage = new messageModel({
            chat: request.params.id,
            createdBy: request.account.id,
            message: request.body.message 
        });

        await newMessage.save(); // Save the new message
        await chatModel.findByIdAndUpdate({_id: request.params.id}, {$push: {messages: newMessage.id}});
        return response.status(okCode).json(newMessage)
    }
    
    catch(error) {
        return response.status(serverError).json({message: error.message});
    }
}