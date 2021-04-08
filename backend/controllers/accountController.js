const accountModel = require('../models/accountModel');
const okCode = 200;
const notFound = 404;
const serverError = 500;

/**
 * @author: Sabin Constantin Lungu
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @function: 
 * @returns:
 * @description: 
 * @description: 
 */

exports.getAllAccounts = async (request, response) => {

    try {
        
        if(request.method === 'GET') {
            
            const allAccounts = await accountModel.find();
            return response.status(okCode).json({allAccounts}); 
        }
    }

    catch(error) { 

        if(error) {
            return response.status(serverError).json({ 
                message: error.message
            });
        }
    }
}

/**
 * @author: Sabin Constantin Lungu
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @function: getAllContacts(request, response)
 * @returns: Returns all of the contacts with a 200 OK status code
 * @description: 
 * @description: 
 */

exports.getAccountById = async (request, response) => {

    try {

        if(request.method === 'GET') {

            const account = await accountModel.findById(request.params.id);

            if(!account){ 
                return response.status(notFound).json({
                    message: 'Account not found'
                });
            }

            return response.status(okCode).json({account}); 
        }
    }

    catch(error) {
        if(error) {
            return response.status(serverError).json({ 
                message: error.message
            });
        }
    }
}

exports.editAccount = async (request, response) => {

	try {
		
		if(request.method === 'PATCH') {

			const updatedAccount = await accountModel.findByIdAndUpdate(request.params.id, request.body, {new: true});
			return response.status(okCode).json({updatedAccount}); 
		}
    }
    
	catch(error) {

		if(error) {
			return response.status(serverError).json({
				message: error.message
			});
		}
	}
}

exports.deleteAccountById = async (request, response) => {

    try {

        if(request.method === 'DELETE') {

            const check = await accountModel.findByIdAndDelete(request.params.id);
             
            if(check) { 
                return response.status(okCode).json({ 
                    message: 'Account deleted'
                });
            } 
            
            else { 

                return response.status(notFound).json({
                    message: 'Account not found'
                });
            }
        }
    }
    
    catch(error) {

        if(error) {

            return response.status(serverError).json({ 
                message: error.message
            });
        }
    }
}    