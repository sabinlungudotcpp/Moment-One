const accountModel = require('../models/accountModel');
const chatModel = require('../models/chatModel');
const okCode = 200;
const notFound = 404;
const forbidden = 422;
const serverError = 500;

exports.connectRequest = async (request, response) => {
    try {

        if(request.method === 'POST') {

            const checkOne = await accountModel.findOne({
                _id: request.params.id,
                connectRequests: {
                    $in: request.account.id
                }
            });

            if(checkOne) {
                return response.status(forbidden).json({
                    message: 'Connection request already sent'
                });
            }

            const checkTwo = await accountModel.findOne({
                _id: request.params.id,
                contacts: {
                    $elemMatch: {
                        user: request.account.id
                    }
                }
            });

            if(checkTwo) {
                return response.status(forbidden).json({
                    message: 'User is already a contact'
                });
            }

            await accountModel.updateOne({
                _id: request.params.id
            },
            {
                $push: {
                    connectRequests: request.account.id
                }
            });

            return response.status(okCode).json({
                message: 'Connect request sent'
            });
        }
    }

    catch(error) {
        return response.status(serverError).json({
            message: error.message
        });
    }
}

exports.deleteConnectRequest = async (request, response) => {

    try {
        if(request.method === 'DELETE') {

            await accountModel.updateOne({_id: request.params.id}, {$pull: {connectRequests: request.account.id}});

            return response.status(okCode).json({
                message: 'Connect request deleted'
            });
        }
    }

    catch(error) {
        return response.status(serverError).json({
            message: error.message
        });
    }
}

exports.getAllConnectRequests = async (request, response) => {
    try {
        if(request.method === 'GET') {
            const connectRequests = await accountModel.findById(request.account.id).select('connectRequests');

            if(!connectRequests.connectRequest) {

                return response.status(notFound).json({
                    message: 'No connect requests found'
                });
            }

            return response.status(okCode).json(connectRequests);
        }
    }

    catch(error) {
        return response.status(serverError).json({
            message: error.message
        });
    }
}

exports.acceptConnectRequest = async (request, response) => {
    try {
        if(request.method === 'PATCH') {
            
            const check = await accountModel.findOne({
                _id: request.params.id,
                contacts: {
                    $elemMatch: {
                        user: request.account.id
                    }
                }
            });
            if(check) {
                return response.status(422).json({
                    message: 'User is already a contact'
                });
            }
            //Create a chat between the two users. Function in chatMOdel will automatically create the contact
            const newChat = new chatModel({between: [request.params.id, request.account.id]});
            await newChat.save()
           
            await accountModel.updateOne({_id: request.account.id},{$pull: {connectRequests: request.params.id}});
            return response.status(okCode).json({
                message: 'Connect request accepted. New chat created'
            });
        }
    }

    catch(error) {
        return response.status(serverError).json({
            message: error.message
        });
    }
}

exports.rejectConnectRequest = async (request, response) => {

    try {
        if(request.method === 'DELETE') { 

            await accountModel.updateOne({_id: request.account.id},{$pull: {connectRequests: request.params.id}});

            return response.status(okCode).json({

                message: 'Connect request deleted'
            });
        }
    }

    catch(error) {
        return response.status(serverError).json({
            message: error.message
        })
    }
}