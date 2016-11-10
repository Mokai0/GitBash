var unsecurePlainTextPassword = "password";

var colors = require('colors');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync(unsecurePlainTextPassword, salt);
console.log(hash.blue);
console.log(hash.red);
console.log(hash.green);


// // Load hash from your password DB.
// bcrypt.compareSync("B4c0/\/", hash); // true
// bcrypt.compareSync("not_bacon", hash); // false
// ```
//
// Auto-gen a salt and hash:
//
// ```javascript
// var hash = bcrypt.hashSync('bacon', 8);
// ```
//
// Usage - Async
// -------------
// To hash a password:
//
// ```javascript
// var bcrypt = require('bcryptjs');
// bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("B4c0/\/", salt, function(err, hash) {
//         // Store hash in your password DB.
//     });
// });
