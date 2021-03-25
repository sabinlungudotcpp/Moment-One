const chatRouter = require('express').Router();
const chatController = require('../controllers/chatController');
const authenticate = require('../middlewares/authentication');
const chatSocket = require('../controllers/chat.io');

chatRouter.route('/').get(authenticate, chatController.getAllChats);
chatRouter.route('/join/:userId').post(authenticate, chatController.joinChat, chatSocket);
chatRouter.route('/id/:id').delete(chatController.deleteChatByChatID);
chatRouter.route('/:id').delete(authenticate, chatController.deleteChatByUsers);
chatRouter.route('/test/:chatId').get(chatSocket);

module.exports = chatRouter;