const accountModel = require('../models/accountModel');
const chatModel = require('../models/chatModel');

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
                return response.status(422).json({
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
                return response.status(422).json({
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
            return response.status(200).json({
                message: 'Connect request sent'
            });
        }

    }
    catch(error) {
        return response.status(500).json({
            message: error.message
        });
    }
}

exports.deleteConnectRequest = async (request, response) => {
    try {
        if(request.method === 'DELETE') {
            await accountModel.updateOne({_id: request.params.id},{$pull: {connectRequests: request.account.id}});
            return response.status(200).json({
                message: 'Connect request deleted'
            });
        }

    }
    catch(error) {
        return response.status(500).json({
            message: error.message
        });
    }
}

exports.getAllConnectRequests = async (request, response) => {
    try {
        if(request.method === 'GET') {
            const connectRequests = await accountModel.findById(request.account.id).select('connectRequests');

            if(!connectRequests.connectRequest) {
                return response.status(404).json({
                    message: 'No connect requests found'
                });
            }

            return response.status(200).json(connectRequests);
        }
    }
    catch(error) {
        return response.status(500).json({
            message: error.message
        });
    }
}

exports.acceptConnectRequest = async (request, response) => {
    try {
        if(request.method === 'PATCH') {
            //First check if user is already in contacts
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
            //Then remove the request
            await accountModel.updateOne({_id: request.account.id},{$pull: {connectRequests: request.params.id}});
            return response.status(200).json({
                message: 'Connect request accepted. New chat created'
            });
        }
    }
    catch(error) {
        return response.status(500).json({
            message: error.message
        });
    }
}

exports.rejectConnectRequest = async (request, response) => {
    try {
        if(request.method === 'DELETE') { 
            await accountModel.updateOne({_id: request.account.id},{$pull: {connectRequests: request.params.id}});
            return response.status(200).json({
                message: 'Connect request deleted'
            });
        }
    }
    catch(error) {
        return response.status(500).json({
            message: error.message
        })
    }
}

