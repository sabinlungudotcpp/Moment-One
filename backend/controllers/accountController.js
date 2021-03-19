//accountController for the momentOne platform 
const accountModel = require('../models/accountModel');

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
        //Testing request method
        if(request.method === 'DELETE') {

            await accountModel.findByIdAndDelete(request.params.id); //Finding user by _id in url
            return response.status(200).json({ //Response with http ok code
                message: 'Account deleted'
            });
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