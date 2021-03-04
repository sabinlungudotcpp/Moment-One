const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const TherapistSchema = new mongoose.Schema({ //Therapist schema that inherits from the base schema

	name: { 
		
		firstName: {
			type: String,
			required: [true, 'Firat name required']
		},

		lastName: {
			type: String,
			required: [true, 'Last name required']
		}
    },
    
	contactInfo: {

		email: { 
			type: String,
			required: [true, 'Email required'],
			match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Invalid email address'], //Regex. Matches email accounts.
			index: true,
			sparse: true
		},

		tel: {
			type: Number, 
			required: [true, 'Phone number required']
		},

		location: {

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

const Therapists = mongoose.model('Therapist', TherapistSchema);
module.exports = Therapists; // Export the module