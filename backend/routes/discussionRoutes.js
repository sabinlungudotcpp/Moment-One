const express = require('express');
const discussionController = require('../controllers/discussionController');
const discussionRouter = express.Router();

discussionRouter.route('/').get(discussionController.getAllDiscussions).post(discussionController.createDiscussion).delete(discussionController.deleteDiscussions)
discussionRouter.route('/:id').patch(discussionController.editDiscussion);

module.exports = discussionRouter;