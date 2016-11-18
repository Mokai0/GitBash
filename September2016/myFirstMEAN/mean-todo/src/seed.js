'use strict';

var Todo = require('./models/todo.js');

var todos = [
  'workout a lot',
  'play ball with friends',
  'game on bf4'
]

todos.forEach(function(todo, index) {
  Todo.find({'name': todo}, function (err, todos) {
    if(!err && !todos.length) {
      Todo.create({completed: false, name: todo});
    };
  });
});
