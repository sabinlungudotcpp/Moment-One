//Therapist model schema for Moment One platform therapist accounts
const mongoose = require('mongoose');
const therapistSchema = new mongoose.Schema({

	username: {
		type: String,
		unique: [true, 'Username taken'],
		required: [true, 'Username required'],
		match: [/^[a-zA-Z0-9]+$/, 'Invalid username'], //Regex. Allows Alphanumeric usernames with no special characters.
		min: 3,
		index: true
	},

	name: {
		firstName: String,
		lastName: String,
		required: [true, 'Name required'],
		index: true
	},

	contactInfo: {

		email: {
			type: String,
			unique: [true, 'Email already used'],
			required: [true, 'Email required'],
			match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Invalid email address'], //Regex. Matches email accounts.
			index: true
		},

		tel: {
			type: Number,
			required: [true, 'Phone number required']
		},

		location: {
			city: String,
			country: String,
			required: [true, 'Location required']
		}
	},

	password: {
		type: String,
		required: [true, 'Password required'],
		min: 8,
		max: 20
	},

	aboutMe: String,
	profileImage: String, //Path to image
	banner: string, //Path to banner image
});

mongoose.model('therapist', therapistSchema);