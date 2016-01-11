/**
 * Created by Jon on 1/9/16.
 */
app.controller('ListCtrl', function($scope, ListFactory) {
    $scope.todos = [];
    ListFactory.getAllTodos()
        .then(function(allTodos) {
            //console.dir(allTodos);
            $scope.todos = (allTodos.data);
        });
    $scope.addTodo = function() {
        $scope.todos.push({todo: $scope.newTodo});
        ListFactory.newTodo($scope.newTodo)
            .then(function(response) {
                console.log(response);
            })
            .then(null, function(err) {
                if (err) console.error(err);
            });
    };
    //$scope.getAllTodos = function() {
    //    ListFactory.allTodos()
    //        .then(function(allTodos) {
    //            $scope.todos = allTodos;
    //        })
    //}

});