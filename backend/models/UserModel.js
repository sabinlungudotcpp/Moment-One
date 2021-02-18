//User model schema for MomentOne platform user accounts
const mongoose = require('mongoose');
let ObjectId = require('mongodb').ObjectID;
const UserSchema = new mongoose.Schema({
	username: {
		type: String, 
		unique: [true, 'Username taken'],
		required: [true, 'Username required'],
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

mongoose.model('User', UserSchema);