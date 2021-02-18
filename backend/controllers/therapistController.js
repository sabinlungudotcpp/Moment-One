//Controller for the therapist therapist model. Moment one platform
const mongoose = require('mongoose');
const Therapist = mongoose.model('Therapist')

exports.getAllTherapists = async (request, response) => { //get all therapists
	try {
		const method = request.method;
		if(method === 'GET') {
			const allTherapists = await Therapist.find(); //Getting therapists from the database
			return response.status(200).json({ //http code 200 (OK)
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
		if(method === 'GET') {
			const id = request.params.id; //Request parameters
			const therapistId = await Therapist.findById(id); 
			return response.status(200).json({ //http code 200 (OK)
			therapistId
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

exports.createNewTherapist = async (request, response) => { //Create a new therapist
	try {
		const method = request.method;

		const {
			username,
			name: {
				firstName,
				lastName
			},
			contactInfo: {
				email,
				tel,
				location: {
					city,
					country
				},
			},
			password
		} = request.body; //destructuring the request body 

		if(!username || !name || !contactInfo || !password ) { //Testing to check that all inforamtion has been provided
			 return response.status(422).json({ //http error code 422 (Unprocessable entity)
			 	message: 'Not enough information provided.'
			});
		}

		if(method === 'POST') {
			const newTherapist = new Therapist({
				username,
				name: {
					firstName,
					lastName
				},
				contactInfo: {
					email,
					tel,
					location: {
						city,
						country
					},
				},
				password
			}); //Creating new Therapist

			await newTherapist.save(); //Saving new therapist to database
			return response.status(201).json({ //http code 201 (Created)
				newTherapist,
				createdAt: Date.now()
			});
		}
	}
	catch(error){
		if(error) {
			return console.error(error);
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
			return  response.status(200).json({ //http code 200 (OK)
				message: 'All therapists successfully deleted',
				deletedAt: date.now()
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

exports.deleteTherapistById = async (request, response) => { //Delete a therapist by id
	try {
		const method = request.method;
		const id = request.params.id;
		if(method === 'DELETE') {
			await Therapist.findByIdAndDelete(id);
			return response.status(200).json({ //http code 200 (OK)
				message: 'therapist deleted successfully',
				deletedAt: date.now()
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