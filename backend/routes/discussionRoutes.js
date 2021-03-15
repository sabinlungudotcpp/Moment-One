const express = require('express');
const discussionController = require('../controllers/discussionController');
const discussionRouter = express.Router();

discussionRouter.route('/').get(discussionController.getAllDiscussions).delete(discussionController.deleteDiscussions);
discussionRouter.route('/:id').patch(discussionController.editDiscussion);

module.exports = discussionRouter;