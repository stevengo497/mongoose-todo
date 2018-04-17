//  SETUP and CONFIGURATION
/////////////////////////////


//require express in our app
var express = require('express'),
  bodyParser = require('body-parser');
var db = require('./models');
// generate a new express app and call it 'app'
var app = express();
var Todo = require('./models/todo');
const logger = require('morgan');

/* setting up port & listen */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

// serve static files in public
app.use(express.static('public'));
app.use(logger('tiny'));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

//initialize variable to use for our environment port

app.get('/', function (req, res) {
  res.sendFile('./views/index.html' , { root : __dirname});
});