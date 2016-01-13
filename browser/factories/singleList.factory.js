app.factory('SingleListFactory', function($http) {
    return {
        getAllTodos: function() {
            return $http.get('/todos');
        },
        newTodo: function(todo) {
            return $http.post('/newTodo', {todo: todo});
        },
        deleteTodoFromDb: function(todo) {
            return $http.delete('/removeTodo/' + todo._id);
        },
        editTodo: function(todoToEdit) {
            return $http.put('/editTodo', todoToEdit);
        }
    };
})