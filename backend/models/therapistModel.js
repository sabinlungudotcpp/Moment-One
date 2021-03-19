//Therapist user model for the momentone platform
//This model inherits from the accountModel
const mongoose = require('mongoose');
const account = require('./accountModel');

//Therapist model that inherits from the accountModel
const therapist = account.discriminator('Therapist', new mongoose.Schema({ 
	firstName: {
		type: String,
		required: [true, 'First name required']
	},

	lastName: {
		type: String,
		required: [true, 'Last name required']
	},

	telephone: {
		type: Number, 
		required: [true, 'Phone number required']
	},
	
	city: {
		type: String,
		required: [true, 'City required']
	},

	country: {
		type: String,
		required: [true, 'Country required']
	}
}));

module.exports = therapist; // Export the module