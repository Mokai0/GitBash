var Profile = require("./profile.js");

//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
  //if url == "/" && GET
  if (request.url === "/") {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end('The Footer\n');
  }
  //if url == "/" && POST
    //redirect to /:username
}

//Handle HTTP route GET /:username i.e. /mohammadhanbali
function user(request, response) {
  //if url == "/" && GET
  if(username.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");

    //get JSON from Treehouse
    var studentProfile = new Profile(username);
    //on "end"
    studentProfile.on("end", function(profileJSON){
      //show profile

      //Store the values which we need
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }
      //Simple response
      response.write(values.username + " has " + values.badges + " badges\n");
      response.end('This is the Footer\n');
    });

    //on "error"
    studentProfile.on("error", function(error){
      //show error
      response.write(error.message + "\n");
      response.end('This is the Footer\n');
    });
  }
}

module.exports.home = home;
module.exports.user = user;
