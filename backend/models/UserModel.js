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

	aboutMe: String, 

	goals: { //user goals. Could create seperate schema for goals?
		goal: {
			type: String,
			required: true
		},

		reason: {
			type: String,
			required: true
		},

		length: {
			type: Number,
			min: 2,
			max: 60,
			required: true
		},

		reward: {
			type: String,
			required: true
		}
	},

	therapist: ObjectId, //ObjectId linking to assigned therapists
	posts: [ObjectId], //Arrey of post ids
	profileImage: String, //Path to profile picture file 
	banner: String //Path to banner picture file
});

mongoose.model('User', UserSchema);