const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require('bcrypt'); 

const userSchema = new mongoose.Schema({ //Base Schema for both user and therapist accounts.
	username: { 
		type: String,
		unique: [true, 'Username taken'], 
		match: [/^[a-zA-Z0-9]+$/, 'Invalid username'], 
		min: 3, 
		index: true,
		required: [true, 'You must provide your username']
	},

	password: { 
		type: String, 
		required: [true, 'You must provide your password'],
		min: 8,
		max: 20 
	},

	passwordConfirm: {
		type: String,
		required: [true, 'You must confirm your passwword']
	},

	passwordResetExpiry: Date,

	aboutMe: {
		type: String, 
		max: 500,
		required: false
	},

	profileImage: String,
	bannerImage: String 
}); 

userSchema.pre('save', function(next) { 
	const currentUser = this; 

	if(!currentUser.isModified('password')) { 
		return next();
	}
});

userSchema.methods.comparePasswords = async function(candidatePassword, userPassword) { // Method to compare user passwords
	return await bcrypt.compare(candidatePassword, userPassword); // Compare the passwords before authentication
}

const User = mongoose.model('User', userSchema);
module.exports = User; // Export the user schema model