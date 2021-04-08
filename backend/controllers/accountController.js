//accountController for the momentOne platform 
const accountModel = require('../models/accountModel');
const postModel = require('../models/PostsModel');
const commentModel = require('../models/CommentsModel');
const goalModel = require('../models/goalsModel');
const chatModel = require('../models/chatModel');
const messageModel = require('../models/messageModel');

//Getting all accounts. Users and Therapists
exports.getAllAccounts = async (request, response) => {
    try{
        //Testing to check if the request method is GET
        if(request.method === 'GET') {
            
            const allAccounts = await accountModel.find(); //Getting all accounts from the database
            return response.status(200).json({allAccounts}); //Sending response with all accounts
        }
    }
    //Catching all errors
    catch(error) { 
        if(error) {
            return response.status(500).json({ //Internal server error
                message: error.message
            });
        }
    }
}

//Getting an account by _id
exports.getAccountById = async (request, response) => {
    try {
        //Testing request method
        if(request.method === 'GET') {

            const account = await accountModel.findById(request.params.id); //finding the account from the _id in the url
            if(!account){ //Testing to see if account was found
                return response.status(404).json({ //Not found
                    message: 'Account not found'
                });
            }
            return response.status(200).json({account}); //Sending response with account
        }
    }
    //catching all errors
    catch(error) {

        if(error) {
            return response.status(500).json({ //Internat server error
                message: error.message
            });
        }
    }
}

exports.editAccount = async (request, response) => {
	try {
		//testing if the request method is patch
		if(request.method === 'PATCH') {
			const updatedAccount = await accountModel.findByIdAndUpdate(request.params.id, request.body, {new: true}); //Finds user by id and then updates with content of request body.
			return response.status(200).json({updatedAccount}); //Sending http code 200 (OK) and updated account
		}
	}
	//Catching error
	catch(error) {
		if(error) {
			return response.status(500).json({ //internal server error
				message: error.message
			});
		}
	}
}

exports.deleteAccountById = async (request, response) => {
    try {
        if(request.method === 'DELETE') {

            const account = await accountModel.findByIdAndDelete(request.params.id);
             
            if(account) {
                //All user created content and references need to be deleted along with the account
                //First the users posts and all comments on those posts
                const posts = await postModel.find({createdBy: account.id});
                await commentModel.deleteMany({_id: {$in: posts.comments}});
                await postModel.deleteMany({createdBy: account.id});
                //Then comments
                await commentModel.deleteMany({createdBy: account.id});
                //Then connect Requests
                await accountModel.updateMany({connectRequests: account.id},{$pull: {connectRequests: account.id}});
                //Then all the contacts
                await accountModel.updateMany(
                    {contacts: {$elemMatch: {user: account.id}}},
                    {$pull: {contacts: {user: account.id}}}
                );
                //Then all the chats and messages get deleted
                const chats = await chatModel.find({between: account.id}).select('_id');
                await messageModel.deleteMany({chat: {$in: chats}});
                await chatModel.deleteMany({between: account.id});
                //Then all the goals for users
                if(account.type === 'User') {
                    await goalModel.deleteMany({createdBy: account.id});
                }

                return response.status(200).json({ //Response with http ok code
                    message: 'Account deleted'
                });
            } 
            
            else { //if check is empty then account couldn't be found and deleted from the _id provided
                return response.status(404).json({
                    message: 'Account not found'
                });
            }
        }
    }
    //catching all errors
    catch(error) {
        if(error) {
            return response.status(500).json({ //Internal server error
                message: error.message
            });
        }
    }
}    