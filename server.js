var express = require('express');
var app = express();
var routes = require('./browser/routes');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static('./node_modules'));
app.use(express.static('./browser'));

app.use('/', routes);

app.listen(port, function () {
    console.log('Listening on port ' + port);
});