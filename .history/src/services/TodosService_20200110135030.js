import storageService from './storageService.js'

var testTodos = [{ _id: 'c1', content: 'hello', isDone: false },
{ _id: 'c2', content: 'world', isDone: false },
{ _id: 'c3', content: 'ohad', isDone: false }];

export default {
    query,
    save,
    remove,
    get
}

function query() {
    return storageService.query('todos')
        .then(todos => {
            if (todos.length === 0) return storageService.postMany('todos', testTodos)
            return todos;
        })
}

function get(id) {
    return storageService.get('todos', id)
}

function remove(id) {
    return storageService.remove('todos', id)
}

function save(editedTodo) {
    if (editedTodo._id) {
        return storageService.put('todos', editedTodo)

    } else {
        return storageService.post('todos', editedTodo)
    }
}

