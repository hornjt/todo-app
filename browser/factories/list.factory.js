app.factory('ListFactory', function($http) {
    return {
        getAllTodos: function() {
            return $http.get('/todos');
        },
        newTodo: function(todo) {
            return $http.post('/newTodo', {todo: todo});
        }
    };
})