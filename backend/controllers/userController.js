const userModel = require('../models/userModel');

//Getting all User accounts
exports.getAllUsers = async (request, response) => { 
	try {
		//Testing the request method to make sure it is GET
		if(request.method === 'GET') {

			const allUsers  = await userModel.find(); //Getting users from the database
			return response.status(200).json({allUsers}); //Sending responce with all user accounts
		}
	}
	//Catching errors
	catch(error) { 
		if(error) {
			return response.status(500).json({ //http error code 500 (Internal Server error)
				message: error.message
			});
		}
	}
}