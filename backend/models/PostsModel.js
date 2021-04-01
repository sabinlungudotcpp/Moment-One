const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({

    title: { // Title of the post
        type: String,
        unique: false,
        required: true
    },

    description: { // Description of the post
        type: String,
        unique: false,
        required: true
    },

    // User feeling on the post
    feeling: {
        type: String,
        enum: ['Great', 'Good', 'Meh', 'Bad', 'Awful'],
        required: true
    },

    // Post category
    category: {
        type: String,
        enum: ['General', 'Anxiety', 'PTSD', 'Depression', 'Weight loss'],
        required: true
    },

    selfAware: {
        type: Boolean,
        required: true
    },
    
    //Reference to the Account that created the post
    createdBy: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    },

    // Array that will hold all of the post comments
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comments'
	}]
},

{
    timestamps: true
});

const Post = mongoose.model('Post', PostSchema); // Creates a model based on the schema above.
module.exports = Post; // Exports the post model