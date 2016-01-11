/**
 * Created by Jon on 1/8/16.
 */
var router = require('express').Router();
var path = require('path');
var pathToHtml = path.normalize(__dirname + '/../' + '/views/index.html');
var todoModel = require('../../db/models/todo.model.js');

router.get('/', function(req, res, next) {
    res.sendFile(pathToHtml);
});

router.get('/todos', function(req, res, next) {
    todoModel.find({})
        .then(function(allTodos) {
            res.send(allTodos);
        })
        .then(null, next);
});

router.post('/newTodo', function(req, res, next) {
    console.log(req.body);
    todoModel.create({
        todo : req.body.todo
    })
        .then(function(newTodo) {
            console.log("response from mongo " + newTodo);
            res.status(201).send(newTodo);
        })
        .then(null, next);
    //res.send("hit the newTodo post route")
});

module.exports = router;