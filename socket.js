const socketJwt = require('socketio-jwt');
const accountModel = require('./backend/models/accountModel');
const messageController = require('./backend/controllers/messageController');

module.exports = async (io) => {
    
    //Socket authentication middleware using Json Web Tokens
    io.use(socketJwt.authorize({
        secret: process.env.TOKEN_SECRET, //Using secret key stored in .env file
        handshake: true,
        auth_header_required: true,
    }));
    
    io.on('connection', async (socket) => {
        socket.user = await accountModel.findById(socket.decoded_token.id).populate({
            path: 'chats',
            populate: {path: 'between'}
        }); //Registering user to socket object, populating chat and between reference.
        console.log('User connected: ', socket.user.username);
        socket.join(socket.user.id); //Joining room based on user id

        const contacts = socket.user.chats.between.filter(id => id !== socket.user.id); //Getting u
        socket.emit('contacts', contacts);
        
        socket.on('message', async ({chat, content}) => {
            const newMessage = messageController.createMessage(chat.id, socket.user.id, content);
            const recipient = chat.between.filter(id => id !== socket.user.id); //getting the _id of the user the message is sent to
            socket.to(recipient).to(socket.user.id).emit('message', newMessage);

        })
    });
}  