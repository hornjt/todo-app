/**
 * Created by Jon on 1/8/16.
 */
var router = require('express').Router();
var path = require('path');
var SingleList = require('../../../../db/models/singleList.model.js');

router.param('id', function(req, res, next, id) {
    req.body.id = id;
    next();
});

router.get('/allTodos', function(req, res, next) {

    SingleList.find()
        .then(allTodos => res.send(allTodos))
        .then(null, next);
});

router.post('/newTodo', function(req, res, next) {

    SingleList.create({
        todoItem : req.body.todo
    })
        .then(newTodo => res.send(newTodo))
        .then(null, next);
});

router.delete('/removeTodo/:id', function(req, res, next) {

    SingleList.findByIdAndRemove(req.body.id, function(err, data) {
        if (err) next(err);
        else {
            res.send(data);
        }
    })
});

router.put('/editTodo', function(req, res, next) {
    var id = req.body._id;
    req.body.editing = false;

    SingleList.findByIdAndUpdate(id, req.body, function(err, todo) {
        if (err) next(err);
        else res.sendStatus(201);
    });
});

module.exports = router;