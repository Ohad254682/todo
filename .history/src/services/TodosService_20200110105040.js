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
        const idx = todos.findIndex(todo => todo._id === editedTodo._id)
        todos.splice(idx, 1, editedTodo)

    } else {
        editedTodo._id = _makeId()
        todos.push(editedTodo)
    }
    storageService.store('todos', todos)
    return Promise.resolve(editedTodo);
}

function _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
