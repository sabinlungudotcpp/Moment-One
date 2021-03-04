//Controller for the therapist therapist model. Moment one platform
const mongoose = require('mongoose');
const Therapist = mongoose.model('Therapist')
const okCode = 200;
const notFound = 404;
const serverError = 500;

exports.getAllTherapists = async (request, response) => { //get all therapists
	try {
		const method = request.method;
		if(method === 'GET') {
			
			const allTherapists = await Therapist.find(); //Getting therapists from the database
			return response.status(okCode).json({ //http code 200 (OK)
				allTherapists
			});
		}
	}
	catch(error) { //Catching errors
		if(error) {
			return response.status(500).json({ //http error code 500 (Internal Server error)
				message: error.message
			});
		}
	}
}

exports.getTherapistById = async (request, response) => { //Get a therapist by id 
	try {
		const method = request.method;
		const url = request.url;
		const id = request.params.id; //Request parameters

		if(method === 'GET' && url.startsWith('/')) {
			const therapistId = await Therapist.findById(id); 
			return response.status(okCode).json({therapistId}); 
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

exports.createNewTherapist = async (request, response) => { //Create a new therapist
	try {
		const requestMethod = request.method;
		const {firstName, lastName, username, password, passwordConfirm, email, telephone, city, country} = request.body;

		if(!firstName || !lastName || !username || !password || !passwordConfirm || !email || !telephone || !city || !country) {
			return response.status(serverError).json({
				status: 'Fail',
				message: 'Some of the fields are missing, please check again',
				sentAt: new Date().toISOString()
			});
		}

		if(requestMethod === 'POST') {

		}
	} 
	
	catch(error) {
		if(error) {
			return response.status(404).json({
				message: error.message,
				stack: error.stack,
				sentAt: new Date().toISOString()
			});
		}
	}
}

exports.editTherapist = async (request, response) => {
	try {
		const method = request.method;
		const id = request.params.id;

		if(!isNaN(id)) { //Tests if id is a number. not(not-a-number)
			return response.status(500).json({ //http error code 500 (Internal server error). Generic
				message: 'ID invalid'
			});
		}

		if(method === 'PATCH') {
			const updateTherapist = await Therapist.findByIdAndUpdate(id, request.body); //Finds therapist by id and then updates with content of request body.
			return response.status(200).json({ //http code 200 (OK)
				updateTherapist, updatedAt: Date.now()
			});
		}
	}
	catch(error) {
		if(error) {
			return response.status(500).json({ 
				message: error.message
			});
		}
	}
}

exports.deleteAllTherapists = async (request, response) => {
	try {
		const method = request.method;

		if(method === 'DELETE') {
			await Therapist.deleteMany(); // Delete all therapists from database
			return response.status(200).json({ //http code 200 (OK)

				message: 'All therapists successfully deleted',
				deletedAt: new Date().toISOString()
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

exports.deleteTherapistById = async (request, response) => { //Delete a therapist by id
	try {
		const method = request.method;
		const id = request.params.id;

		if(method === 'DELETE') {

			await Therapist.findByIdAndDelete(id);
			return response.status(200).json({ //http code 200 (OK)
				message: 'therapist deleted successfully',
				deletedAt: Date.now()
			});
		}
	}
	catch(error) {
		if(error) {
			return response.status(500).json({ 
				message: error.message
			});
		}
	}
}