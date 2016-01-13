/**
 * Created by Jon on 1/13/16.
 */

var router = require('express').Router();
var path = require('path');
var AllLists = require('../../../../db/models/allLists.model.js');

router.param('id', function(req, res, next, id) {
    req.body.id = id;
    next();
});

router.get('/allLists', function(req, res, next) {
    res.send('get/allLists');
});

router.post('/newList', function(req, res, next) {
    res.send('post/newList');
});

router.delete('/removeList/:id', function(req, res, next) {
    res.send({id: req.body.id});
});

router.put('/editList', function(req, res, next) {
    res.send('/editList');
});

module.exports = router;