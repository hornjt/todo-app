var express = require('express');
var app = express();
var routes = require('./browser/routes');
var path = require('path');

var port = process.env.PORT || 3000;

//var nodeModPath = path.join(__dirname + )

app.use(express.static('./node_modules'));

app.use('/', routes);

app.listen(port, function () {
    console.log('Listening on port 3000!');
});