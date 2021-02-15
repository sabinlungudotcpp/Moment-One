//User model schema for MomentOne platform user accounts
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({

	username: {
		type: String, 
		unique: [true, 'Username taken'],
		required: [true, 'Username required'],
		match: [/^[a-zA-Z0-9]+$/, 'Invalid username'], //Regex. Allows Alphanumeric usernames with no special characters.
		index: true
	},

	firstName: {
		type: String,
		required: [true, 'Name required']
	},

	lastName: {
		type: String,
		required: [true, 'Name required']
	},

	dateOfBirth: { 
		type: Date,
		required: true
	},

	email: {
		type: String,
		unique: [true, 'Email already used'],
		required: [true, 'Email required'],
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
	therapist: ObjectId, //ObjectId linking to assigned therapists
	posts: [ObjectId], //Arrey of post ids
	profileImage: String, //Path to profile picture file 
	banner: String //Path to banner picture file
});

mongoose.model('User', UserSchema);