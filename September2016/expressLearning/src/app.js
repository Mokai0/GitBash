'use strict';

var express = require('express'),
	posts = require('./mock/posts.json');

var app = express();

app.get('/', function(request, response){
	response.send("<h1>Stupid Crazy Monkey!</h1>")
});

app.get('/blog', function(req, res){
	res.send(posts)
});

app.listen(3000, function(){
	console.log("You'll find the monkey on port 3000!")
});