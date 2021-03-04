const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const HASH_BYTES = 12;

const TherapistSchema = new mongoose.Schema({ //Therapist schema that inherits from the base schema

	firstName: {
		type: String,
		required: [true, 'First name required']
	},

	lastName: {
		type: String,
		required: [true, 'Last name required']
	},

	username: { // The username of the therapist model
		type: String,
		min: 3,
		required: [true, 'As a therapist you must specify your username']
	},

	password: {
		type: String,
		required: [true, 'As a therapist you must provide your password']
	},

	passwordConfirm: {
		type: String,
		required: [true, 'You must confirm your password']
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

// Pre-middleware hook
TherapistSchema.pre('save', async function(next) {
	const currentTherapist = this;

	if(!currentTherapist.isModified('password')) {
		return next();
	}

	this.password = await bcrypt.hash(HASH_BYTES)
	this.passwordConfirm = undefined;

	return next(); // Return the next middleware
});

TherapistSchema.methods.comparePasswords = async function(candidatePassword, userPassword) {
	return await bcrypt.compare(candidatePassword, userPassword);
};

const Therapists = mongoose.model('Therapist', TherapistSchema);
module.exports = Therapists; // Export the module