//  SETUP and CONFIGURATION
/////////////////////////////


//require express in our app
const express = require('express'),
  bodyParser = require('body-parser');
const db = require('./models');
// generate a new express app and call it 'app'
const app = express();
const toDoList = require('./seed');
const logger = require('morgan');
const Todo = require('./models/todo');

/* setting up port & listen */
const PORT = process.env.PORT || 3000;
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
  res.sendFile('/views/index.html' , { root : __dirname});
});

app.get('/api/todo', function (req, res) {
	console.log(toDoList) // shows in terminal
	db.Todo.find(function(err, toDoList) {
			})
		res.json(toDoList);

});