const userModel = require('../models/userModel');
const okCode = 200;
const serverError = 500;

/**
 * @author: Sabin Constantin Lungu, Jakub Kosarzecki
 * @function: Middleware function that retrieves all of the registered users from the database
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 */

exports.getAllUsers = async (request, response) => { 
	try {
		
		if(request.method === 'GET') {

			const allUsers  = await userModel.find(); 
			return response.status(okCode).json({allUsers});
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