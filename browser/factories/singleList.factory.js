app.factory('SingleListFactory', function($http) {
    return {
        getAllTodos: function() {
            return $http.get('/api/todos/allTodos');
        },
        newTodo: function(todo) {
            return $http.post('/api/todos/newTodo', {todo: todo});
        },
        deleteTodoFromDb: function(todo) {
            return $http.delete('/api/todos/removeTodo/' + todo._id);
        },
        editTodo: function(todoToEdit) {
            return $http.put('/api/todos/editTodo', todoToEdit);
        }
    };
})