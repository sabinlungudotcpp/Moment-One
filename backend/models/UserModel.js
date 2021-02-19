//User model schema for MomentOne platform user accounts
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const BYTES = 10;
let ObjectId = require('mongodb').ObjectID;
const UserSchema = new mongoose.Schema({
	username: {
		type: String, 
		unique: [true, 'Username taken'],
		match: [/^[a-zA-Z0-9]+$/, 'Invalid username'], //Regex. Allows Alphanumeric usernames with no special characters.
		index: true
	},

	email: {
		type: String,
		unique: [true, 'Email already used'],
		match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Invalid email address'], //Regex. Matches email accounts.
		index: true
	},

	password: {
		type: String,
		required: [true, 'User must contain a valid password'],
		min: 8,
		max: 20
	},

	aboutMe: String,
	therapist: [ObjectId], 
	posts: [ObjectId], 
	profileImage: String, //Path to profile picture file 
	banner: String //Path to banner picture file
});

UserSchema.pre('save', function(next) { // Function before saving the
	const currentUser = this; // The current user

	if(!currentUser.isModified('password')) { // If the user has not modified their password
		return next();
	}

	bcrypt.genSalt(BYTES, (error, salt) => { // Generate a salt of 10 BYTES
		if(error) { // If there is an error
			return next(error);
		}

		else { // Otherwise
			bcrypt.hash(currentUser.password, salt, (error, hash) => { // Hash the current users password by passing it a salt
				if(error) { // If there is an error
					return next(error);
				}

				else {
					currentUser.password = hash;
					next();
				}
			})
		}
	})
});

UserSchema.method.comparePasswords = function(providedPassword) {
	const currentUser = this; // The current user

	return new Promise((resolve, reject) => { // A promise that 
		bcrypt.compare(currentUser.password, providedPassword, (error, passwordMatch) => { // Compare the current user password with the provided password
			if(error) {
				return reject(error);
			}

			if(!passwordMatch) { // If there is no match
				return reject(false);
			}

			else {
			    resolve(true); // Passwords match so therefore resolve is true
			}
		});
	});
}

mongoose.model('User', UserSchema);