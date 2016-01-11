/**
 * Created by Jon on 1/8/16.
 */
var router = require('express').Router();
var path = require('path');
var pathToHtml = path.normalize(__dirname + '/../' + '/views/index.html');
var TodoModel = require('../../db/models/todo.model.js');

router.param('_id', function(req, res, next, id) {

    req.body.id = id;
    next();
});

router.get('/', function(req, res, next) {
    res.sendFile(pathToHtml);
});

router.get('/todos', function(req, res, next) {
    TodoModel.find({})
        .then(function(allTodos) {
            res.send(allTodos);
        })
        .then(null, next);
});

router.post('/newTodo', function(req, res, next) {
    //console.log(req.body);
    TodoModel.create({
        todo : req.body.todo
    })
        .then(function(newTodo) {
            console.log("response from mongo " + newTodo);
            res.status(201).send(newTodo);
        })
        .then(null, next);
});

router.delete('/removeTodo', function(req, res, next) {
    var id = req.query._id;
    //console.log(req.body, req.query, req.params);
    TodoModel.findById(id, function(err, foundTodo) {
        if (err) next(err);
        else {
            console.log(foundTodo);
            foundTodo.remove()
                .then(function(removed) {
                    console.log("This is removed " + removed);
                    res.send(removed);
                })
                .then(null, next);
        }
    });
});

router.put('/editTodo', function(req, res, next) {
    //console.log(req.body, req.query, req.params);
    var id = req.query._id;
    TodoModel.findByIdAndUpdate(id, {todo: req.query.newTodoValue}, function(err, data) {
        if (err) next(err);
        else {
            console.log(data);
            res.send(data);
        }
    });
});

module.exports = router;