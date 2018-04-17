  var mongoose = require('mongoose');
  var Todo = require('./models/todo');
  mongoose.connect('mongodb://localhost/todo-app-demo');