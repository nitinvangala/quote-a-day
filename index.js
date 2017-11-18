var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

var PORT = process.env.PORT || 8080;

var server = app.listen(PORT, function(req, res){
    console.log('server started')
});