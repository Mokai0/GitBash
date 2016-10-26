'this' is can be a powerful tool when used in JavaScript
1)In normal function calls:
  console.log(this) -> not very specific, retrieves window object info.
2)Within methods on objects:
  this.insertValueHere -> When executed within a function will retreive the selected value if it exists.
3)Within an object that has been constructed:
  var city = function (name, state) {
    this.name = name || 'Portland';
    this.state = state || 'Oregon';
  };
        .name and .state were equated to their counter parts 'name' and 'state' that is what anchored their properties within the object 'city' to the 'this' protocol
  Portland = new city ();
  seattle = new city ('Seattle', 'Washington');
        'new' is a keyword within JavaScript that facilitated these protocols
  Console.log (Portland);
  Console.log (seattle);
