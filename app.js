const express = require('express');
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('chat-client/build'));
}

var port = process.env.PORT || 8080;
app.set('view engine', 'html');
var io = require('socket.io').listen(app.listen(port));

// Initialize the ejs template engine
app.engine('html', require('ejs').renderFile);

// Tell express where it can find the templates
app.set('views', __dirname + '/views');

  io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
      socket.broadcast.emit('server:message', msg)
    });
  });