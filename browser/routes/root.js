/**
 * Created by Jon on 1/13/16.
 */

var router = require('express').Router();
var path = require('path');
var pathToHtml = path.normalize(__dirname + '/../' + '/views/index.html');

router.get('/', function(req, res, next) {
    res.sendFile(pathToHtml);
});

module.exports = router;