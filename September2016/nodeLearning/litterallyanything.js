var http = require('http');
//require is an important function in node - lets it know to include only what you tell it
//eventually you'll include express like this
http.createServer(function (
  request,  //contains info from the client's browser
  response  //where all that info gets dumped
) {
  response.writeHead(
    200,  //this is the response code for success
    {"Content-Type":'text/plain' //this tells the browser that its just text, only show it as such
  });
  response.end('HelloWorld or anything else\n')  //'\n' creates a new line
}).listen(8080);  //inside the '()' enter the port that you want this to be served within
console.log('server started');
//to serve this type within the command line: node "name of file"
//node allows you to serve pages in a read only format = no forms or dynamicy 
