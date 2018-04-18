//  SETUP and CONFIGURATION
/////////////////////////////


//require express in our app
var express = require('express'),
  bodyParser = require('body-parser');
var db = require('./models');
// generate a new express app and call it 'app'
var app = express();
var logger = require('morgan');

/* setting up port & listen */
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

/* set the view engine */
app.set('views', './views');
app.set('view engine', 'ejs');

// serve static files in public
app.use(express.static('public'));
app.use(logger('tiny'));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

//initialize variable to use for our environment port

app.get('/', function (req, res) {
  res.render('index.ejs' , { root : __dirname});
});

//find()
app.get('/api/todo', function (req, res) {
	console.log('hello') // shows in terminal
	db.Todo.find(function(err, todos) {
	res.render('index', {todos:todos});
	})
});

//new() & save()
// app.post('/api/todo', function(req, res) {
// 	var newToDo = new Todo(req.body);
// 	newTodo.save(function(err, savedTodo) {
// 		res.json(savedToDo);
// 	});
// });
// this changes the database
let newTask = new db.Todo({task: 'Eat food', description: 'Eat a lot'});
	newTask.save(function(err) {
		if (err) return handleError(err);
	})
