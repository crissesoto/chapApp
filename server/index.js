const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const {addUser, removeUser, getUser, getUsersInRoom} = require('./users');

const PORT = process.env.POORT || 5000;
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    socket.on('signIn', ({name, room}, callback) => {
        const {error, user} = addUser({id: socket.id, name: name, room: room});

        if(error){
            return callback(error);
        }

        socket.emit('message', {user: 'admin', text: `${user.name}, welkom to the chatroom: ${user.room}`});
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined the chat!`});

        socket.join(user.room);

        callback();

    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', {user: user.name, text: message});

        callback();
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on poort: ${PORT}`));
