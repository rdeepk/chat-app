const express = require('express');
const app = express();

var port = process.env.PORT || 8000;
app.set('view engine', 'html');
var io = require('socket.io').listen(app.listen(port));

// Initialize the ejs template engine
app.engine('html', require('ejs').renderFile);

// Tell express where it can find the templates
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {

    // Render views/home.html
    res.render('home');
});

//app.listen(port);

  io.on('connection', function(socket){
      
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
      io.emit('chat message', msg);
    });
  });