/**
 * Created by Jon on 1/9/16.
 */
app.controller('ListCtrl', function($scope, ListFactory) {
    $scope.todos = [];

    $scope.refreshTodoList = function() {
        ListFactory.getAllTodos()
            .then(function(allTodos) {
                $scope.todos = (allTodos.data);
            });
    };

    $scope.addTodo = function() {
        //$scope.todos.push({todo: $scope.newTodo});
        ListFactory.newTodo($scope.newTodo)
            .then(function(response) {
                //console.log(response);
                $scope.newTodo = "";
                $scope.refreshTodoList();   // refresh list after adding new todo
            })
            .then(null, function(err) {
                if (err) console.error(err);
            });
    };

    $scope.deleteTodo = function(todo) {
        //console.dir(todoToDelete);
        ListFactory.deleteTodoFromDb(todo);
        $scope.refreshTodoList();
    };

    $scope.editTodo = function(todo) {
        todo.editing = !todo.editing;
    };

    $scope.saveTodo = function(todo) {
        //console.dir(todo);
        //todo.todo = todo.newTodoValue;
        ListFactory.editTodo(todo)
            .then(function() {
                $scope.refreshTodoList();
            });
    };

    $scope.refreshTodoList();   // Used to populate TodoList on first load
});