const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const Therapist = new mongoose.Schema({ //Therapist schema that inherits from the base schema
	name: { //Therapists name
		firstName: {
			type: String,
			required: [true, 'Firat name required']
		},
		lastName: {
			type: String,
			required: [true, 'Last name required']
		}
    },
    
	contactInfo: { //Therapist contact information

		email: { //Email required for therpist users
			type: String,
			//unique: [true, 'Email already used'],
			required: [true, 'Email required'],
			match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Invalid email address'], //Regex. Matches email accounts.
			index: true,
			sparse: true
		},

		tel: { //Therapistrs phone number
			type: Number, 
			required: [true, 'Phone number required']
		},

		location: { //Therapists locations
			city: {
				type: String,
				required: [true, 'City required']
			},
			country: {
				type: String,
				required: [true, 'Country required']
			}
		}
	}
});

const Therapist = mongoose.model('Therapist', therapistSchema);
module.exports = Therapist;