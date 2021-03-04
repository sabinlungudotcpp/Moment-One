const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const TherapistSchema = new mongoose.Schema({ //Therapist schema that inherits from the base schema

	firstName: {
		type: String,
		required: [true, 'Firat name required']
		},

	lastName: {
		type: String,
		required: [true, 'Last name required']
	},

	username: {
		type: String,
		min: 3,
		required: [true, 'As a therapist you must specify your username']
	},

	password: {

	},
    
	email: { 
		type: String,
		required: [true, 'Email required'],
		match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Invalid email address'], //Regex. Matches email accounts.
		index: true
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
});

const Therapists = mongoose.model('Therapist', TherapistSchema);
module.exports = Therapists; // Export the module