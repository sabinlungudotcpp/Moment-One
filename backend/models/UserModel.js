const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require('bcrypt'); 

const userSchema = new mongoose.Schema({ //Base Schema for both user and therapist accounts.
	username: { // The Username
		type: String, // Type is String
		unique: [true, 'Username taken'], //Only unique usernames accepted. 
		match: [/^[a-zA-Z0-9]+$/, 'Invalid username'], //Regex. Allows Alphanumeric usernames with no special characters.
		min: 3, //Minimum of 3 characters
		index: true
	},

	password: { //User password
		type: String, // Is a string
		required: [true, 'User must contain a valid password'], //Password required
		min: 8,
		max: 20 //Between 8 and 20 characters
	},

	passwordConfirm: {
		type: String,
		required: [true, 'You must confirm your passwword']
	},

	passwordResetExpiry: Date,

	aboutMe: { //About me section of the user profile
		type: String, 
		max: 500,
		required: false
	},

	profileImage: String, //Path to profile image 
	bannerImage: String //Path to banner image 
}, options); //Using options for schema

userSchema.pre('save', function(next) { // Function before saving the
	const currentUser = this; // The current user

	if(!currentUser.isModified('password')) { // If the user has not modified their password
		return next();
	}
});

userSchema.methods.comparePasswords = async function(candidatePassword, userPassword) { // Method to compare user passwords
	return await bcrypt.compare(candidatePassword, userPassword);
}

const Base = mongoose.model('Base', BaseSchema); //The base model

/*
const Therapist = Base.discriminator('User', new mongoose.Schema({ //User schema that inherits from the base schema
	email: { //Email address for users. Not required and only used if user wants notifications
		type: String,
		match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Invalid email address'], // Regex. Matches email accounts.
		index: true,
		sparse: true
	},

	therapist: { //Mongoose population. Refering to the users assigned therapist 
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Therapist'
	},

	goals: [{ //Arrey of objectIds that refer to the users goals
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Goals'
	}]
}));
*/


const Therapist = Base.discriminator('Therapist', new mongoose.Schema({ //Therapist schema that inherits from the base schema
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
	},
	
	users: [{ //Arrey of users that are assigned to this therapist
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}]
}));

module.exports = {
	User,
	Therapist
}