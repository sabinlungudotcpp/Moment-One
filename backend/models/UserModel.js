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

const User = mongoose.model('User', userSchema);
module.exports = User; // Export the user schema model