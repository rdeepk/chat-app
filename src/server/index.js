const express = require('express');
const app = express();
var port = process.env.PORT || 8080;
var io = module.exports.io = require('socket.io').listen(app.listen(port));
const SocketManager = require('./SocketManager');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('chat-client/build'));
}






  io.on('connection', SocketManager);