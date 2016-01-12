/**
 * Created by Jon on 1/9/16.
 */
app.controller('ListCtrl', function($scope, SingleListFactory) {
    $scope.todos = [];

    var refreshTodoList = function() {
        SingleListFactory.getAllTodos()
            .then(function(allTodos) {
                $scope.todos = (allTodos.data);
            });
    };

    var saveToDatabase = function(todo) {
        SingleListFactory.editTodo(todo)
            .then(function() {
                refreshTodoList();
            });
    };

    $scope.addTodo = function() {
        if (!$scope.newTodo) {
            alert("Todo must not be empty");
        }
        else {
            SingleListFactory.newTodo($scope.newTodo)
                .then(function(response) {
                    //console.log(response);
                    $scope.newTodo = "";
                    refreshTodoList();   // refresh list after adding new todo
                })
                .then(null, function(err) {
                    if (err) console.error(err);
                });
        }
    };

    $scope.deleteTodo = function(todo) {
        //console.dir(todoToDelete);
        SingleListFactory.deleteTodoFromDb(todo);
        refreshTodoList();
    };

    $scope.saveTodo = function(todo) {
        if (!todo.newTodoValue) {   // check for blank entry
            todo.editing = false;
            return;
        }
        saveToDatabase(todo);
    };

    $scope.updateCompleted = function(todo) {
        saveToDatabase(todo);
    };

    refreshTodoList();   // Used to populate TodoList on first load
});