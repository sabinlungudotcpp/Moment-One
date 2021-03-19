//Therapist Controller for the momentone platform
const therapistModel = require('../models/therapistModel');

//Getting all therapist accounts
exports.getAllTherapists = async (request, response) => {
	try {
		//Testing to make sure the request method is get
		if(request.method === 'GET') {

			const allTherapists = await therapistModel.find(); //getting all therapists from database
			return response.status(200).json({allTherapists}); //Ok response with all therapist accounts
		}
	}
	//Catching errors
	catch(error) {
		if(error) {
			return response.status(500).json({ //internal server error
			message: error.message
			});
		}
	}
}