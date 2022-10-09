var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// set up template engine
app.set('view-engine', 'ejs');

// static files
app.use(express.static('./public'));

// listen to a port 3000
app.listen(3000);
console.log('You are listening on port 3000');
