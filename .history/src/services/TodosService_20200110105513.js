import storageService from './storageService.js'

var testTodos = storageService.load('todos') || [{ _id: 'c1', content: 'hello' },
{ _id: 'c2', content: 'world' },
{ _id: 'c3', content: 'ohad' }];

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
        storageService.put('todos', editedTodo)

    } else {
        editedTodo._id = _makeId()
        todos.push(editedTodo)
    }
    storageService.store('todos', todos)
    return Promise.resolve(editedTodo);
}

