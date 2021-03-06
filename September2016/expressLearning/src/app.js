'use strict';

var express = require('express'),
			posts = require('./mock/posts.json');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/templates')

app.get('/', function(req, res){
	res.render('index')
});

app.get('/blog/:title?', function(req, res){
	var title = req.params.title;
	if (title === undefined){
		res.status(503);
		res.send("This page is under construction!");
	} else {
		var post = posts[title] || {};
		res.render('post', { post: post});
		//res.send(posts);
	}
});

app.listen(3000, function(){
	console.log("You'll find the monkey on port 3000!")
});
