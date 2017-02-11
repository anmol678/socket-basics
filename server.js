var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connnection', function() {
	console.log('User connected to server via socket io');
});

http.listen(PORT, function() {
	console.log('Server started');
});