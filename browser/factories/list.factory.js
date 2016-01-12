app.factory('SingleListFactory', function($http) {
    return {
        getAllTodos: function() {
            return $http.get('/todos');
        },
        newTodo: function(todo) {
            return $http.post('/newTodo', {todo: todo});
        },
        deleteTodoFromDb: function(todoToDelete) {
            return $http({
                url : "/removeTodo",
                method: 'DELETE',
                params: todoToDelete
            });
        },
        //editTodo: function(todoToEdit) {
        //    return $http({
        //        url: '/editTodo',
        //        method: 'PUT',
        //        params: todoToEdit
        //    });
        //}
        editTodo: function(todoToEdit) {
            return $http.put('/editTodo', todoToEdit);
        }
    };
})