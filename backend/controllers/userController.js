const mongoose = require('mongoose');
const User = mongoose.model('User');
const okCode = 200;
const created = 201;
const unprocessable = 422;
const serverError = 500;

exports.getAllUsers = async (request, response) => { //get all users
	try {
		const method = request.method;
		const url = request.url;

		if(method === 'GET' && url.startsWith('/')) {
			const allUsers  = await User.find(); //Getting users from the database
			return response.status(okCode).json({allUsers});
		}
	}

	catch(error) { //Catching errors
		if(error) {
			return response.status(serverError).json({ //http error code 500 (Internal Server error)
				message: error.message,
				stack: error.stack,
				sentAt: new Date().toISOString()
			});
		}
	}
}

exports.getUserById = async (request, response) => { // Get a user by their ID
	try {

		const method = request.method;
		const url = request.url;

		if(method === 'GET' && url.startsWith('/')) {
			const id = request.params.id; //Request parameters
			const userId = await User.findById(id); 

			return response.status(okCode).json({userId}); 
		}
	}
	catch(error) {
		if(error) {
			return response.json({
				message: error.message
			});
		}
	}
}

exports.getUsername = async (request, response) => { //Get user by username
	try {
		const method = request.method; 
		const url = request.url;

		if(method === 'GET' && url.startsWith('/')) {

			const body = request.body; //Getting the username
			const userName = await User.findOne().where('username').equals(body); //searches for users using the provided username 
			return response.status(okCode).json({userName}); 
		}
	}
	
	catch(error) {
		
		if(error) {
			return response.status(serverError).json({ 
				message: error.message,
				stack: error.stack,
				sentAt: new Date().toISOString()
			});
		}
	}
}

exports.editUser = async (request, response) => { // Function that edits a user

	try {
		const method = request.method;
		const id = request.params.id;

		if(!isNaN(id)) { //Tests if id is a number. not(not-a-number)
			return response.status(serverError).json({ //http error code 500 (Internal server error). Generic
				message: 'ID invalid'
			});
		}

		if(method === 'PATCH') {
			const updateUser = await User.findByIdAndUpdate(id, request.body); //Finds user by id and then updates with content of request body.
			return response.status(okCode).json({ //http code 200 (OK)
				updateUser, updatedAt: Date.now()
			});
		}
	}

	catch(error) {
		if(error) {
			return response.status(serverError).json({ 
				message: error.message,
				stack: error.stack
			});
		}
	}
}

exports.deleteAllUsers = async (request, response) => { // Deletes all the users from the database
	try {
		const method = request.method;

		if(method === 'DELETE') {
			await User.deleteMany(); // Delete all users from database

			return response.status(okCode).json({ //http code 200 (OK)
				message: 'All users successfully deleted',
				deletedAt: Date.now()
			});
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

exports.deleteUserById = async (request, response) => { //Delete a user by id
	try {
		const method = request.method;
		const id = request.params.id;

		if(method === 'DELETE') {

			await User.findByIdAndDelete(id);
			return response.status(okCode).json({ //http code 200 (OK)
				message: 'User deleted successfully',
				deletedAt: Date.now()
			});
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