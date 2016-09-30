#Object:
  An object is a container for values in the form of 'properties' and functionality in the form of 'methods'
Ex:
  var h1 = document.getElementById('header');
        .getElementById is a method on the document object
        #remember the objective of a method is to return a value, if not immediately then somewhere down the line.
  console.log(h1.innerHTML);
  h1.innerHTML = 'JavaScript is Awesome!';


#Objects:
  -Provide functionality through 'methods'. Methods may or may not return values
  -Provides data storage in 'properties'
  -The name of the property is a 'key'
  -The contents of a property is known as a 'value'
  -ALL objects (real or digital) contain 2 characteristics:
    /a state - the condition of all values within it at any point in time = the properties
    /and the behavior = the methods

#A key purpose for all objects is ENCAPSULATION
  housing the objects and all their characteristics so that they may be utilized more efficiently and effectively later

#Different kinds of objects:
  Native objects - native to JavaScript ergo no matter where the JS is executed they will still exist. They can be a:
    -number
    -string
    -array
    -boolean
    -objects (and possibly a few more)
  Host objects - provided by the environment the JS is being executed within, AKA 'The Host Environment'
  -so far we've been using the Browser Environment which has objects such as the:
    -document /can be modified by the 'write' method
      /can be used for finding HTML elements
    -console /for logging out values
    -Element /useful for retrieving data
      /as well as an anchor for modification;  'innerHTML' for example
  My OWN objects - pretty much anything I make. They're used to handle the 'state' of my application.

#Object Literal - TLDR OL=state of object

  var person = {
    name: 'Lauren',
    "treehouseStudent": true,
    'full name': 'Lauren Chalkley'
  }
      /all object properties (or keys) within JavaScript are strings, the interpretor is programmed to understand this ergo no NEED for the quotes unless the key:
        /contains a space
        /begins with a special character
  person.name;
  person['treehouseStudent'];
  person['full name'];
      /the same applies to when calling the properties or methods of an object. To call a key that doesn't use any spaces or special characters simply use a "." (period/dot) to call that Object Literal.
      /however if the OL does contain any of the special conditions you must us [''] or [""] to call them
#Constructor Funcitons
  Object Literals are one of a kind objects - generally speaking they are good for a specific type of object or passing specific values to a function versus multiple objects (of the same kind).
  Describes how an object should be created
  Create similar objects
  Each object created is known as an instance of that object type

  function Contact(name, email) {
    //this = {}; <-to symbolize that this is a constructor function and will technically not be included in the function or in the call of the function.
    this.name = name;
    this.email = email;
    this.sendEmail = function() {/* Do something */}
    //return this; <-not usually necessary
  }
      /this is a constructor function that allows us to create and object with the values of 'name' and 'email'
  var contact = new Contact('Mokai', 'mokai86@gmail.com');
      /here we're creating a new contact 'instance' - a specific realization of a particular type or object.
  var contact = new Contact('DrMo', 'drmo44@gmail.com');
      /here is a new contact instance. Using the 'new' keyword we can create a new 'instance'. The 'new' keyword allows us to utilize a function as a constructor function rather than calling the previously stored (or default) values for that function.

\GAME THEORY - maybe constructor functions could be used to create new variables within games (items, monsters, etc) on the fly?
