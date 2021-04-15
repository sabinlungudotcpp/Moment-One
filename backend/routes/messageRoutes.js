//This is the message router if we don't manage to get socket.io to work
const messageRouter = require('express').Router();
const messageController = require('../controllers/messageController');
const auth = require('../middlewares/authentication');

messageRouter.route('/:id').get(messageController.getAllMessages).post(auth, messageController.createMessage).patch(messageController.editMessage).delete(messageController.deleteMessage);

module.exports = messageRouter;
