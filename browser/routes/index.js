/**
 * Created by Jon on 1/8/16.
 */
var router = require('express').Router();
var path = require('path');
var pathToHtml = path.normalize(__dirname + '/../' + '/views/index.html');
var TodoItemModel = require('../../db/models/todoItem.model.js');

//router.param('_id', function(req, res, next, id) {
//
//    req.body.id = id;
//    next();
//});

router.get('/', function(req, res, next) {
    res.sendFile(pathToHtml);
});

router.get('/todos', function(req, res, next) {
    TodoItemModel.find({})
        .then(function(allTodos) {
            res.send(allTodos);
        })
        .then(null, next);
});

router.post('/newTodo', function(req, res, next) {
    //console.log(req.body);
    TodoItemModel.create({
        todoItem : req.body.todo
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
    TodoItemModel.findById(id, function(err, foundTodo) {
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
    //console.log("Req body" ,req.body);
    console.log(req.body);
    var id = req.body._id;
    req.body.editing = false;

    TodoItemModel.findByIdAndUpdate(id, req.body, function(err, todo) {
        if (err) next(err);
        else res.sendStatus(201);
    });
});

module.exports = router;