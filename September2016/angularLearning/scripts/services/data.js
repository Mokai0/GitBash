'use strict';

angular.module("todoListApp")
.service('dataService', function($http) {
  this.helloConsole = function() {
    console.log('This is a PSA!');
  };

  this.getTodos = function(callback) { $http.get('mock/todos.json')
    .then(callback);
  };

  this.deleteTodos = function(todo) {
    console.log("The "+ todo.name +" todo has been deleted!");
    // other logic
  };

  this.saveTodos = function(todos) {
    console.log(todos.length +" tasks have been saved!")
    // other logic
  };

});
