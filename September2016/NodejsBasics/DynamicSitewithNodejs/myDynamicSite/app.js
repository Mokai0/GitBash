var router = require("./router.js");
//Problem: We need a simple way to look at a user's badge count and JS point from a web browser
//Solution: Use Node.js to perform the profile look ups and server our template via HTTP

//Create a web server

var http = require('http');
var https = require('https');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(5000);
console.log('Server running at localhost:5000');


//Function that handles the reading of the files and merge in values
  //read from file and get a string
    //merge values in to string
