const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.getAllUsers = async (request, response) => { //get all users
	try {
		const method = request.method;
		if(method === 'GET') {
			const allUsers  = await Users.find(); //Getting users from the database
			return response.json(allUsers);
		}
	}
	catch(error) { //Catching errors
		if(errorr) {
			return response.status(500).json({ //http error code 500 (Internal Server error)
				message: error.message
			});
		}
	}
};

exports.getUserById = async (request, response) => { //Get a user by _id 
	try {
		const method = request.method;
		if(method === 'GET') {
			const id = request.params.id; //Request parameters
			const userId = await User.findById(id); 
			return response.status(200).json({userId}); //http code 200 (OK)
		}
	}
	catch(error) {
		if(error) {
			return response.json({
				message: error.message
			});
		}
	}
};

exports.getUserByUserName = async (request, request) => { //Get user by username
	try {
		const method = request.method; 
		if(method === 'GET') {
			const body = request.body; //Getting the username
			const userName = await User.findOne().where('username').equals(body); //searches for users using the provided username 
			return respose.status(200).json(userName); //http code 200 (OK)
		}
	}
	catch(error) {
		if(error) {
			return response.json({ 
				message: error.message
			});
		}
	}
};

exports.createNewUser = async (request, response) => { //Create a new user
	try {
		const method = request.method;

		//Getting signup information from user
		const {username, firstName, lastName, dateOfBirth, email} = request.body;
		if (!username || !firstName || !lastName || !dateOfBirth || !email ) { //Verifying that all information is present. Can this be written better?
			return respose.status(422).json({ //http error code 422 (Unprocessable entity). Is this the correct code to use for missing parameters?
				message: 'Not enough information provided'
			});
		}

		if(method === 'POST') {
			const newUser = new User({username, firstName, lastName, dateOfBirth, email});
			await newUser.save(); //Saving new user to database
			return response.status(201).json({ //http code 201 (Created)
				newUser,
				createdAt: date.now()
			});
		}
	}
	catch(error){
		if(error) {
			return console.error(error);
		}
	}
};