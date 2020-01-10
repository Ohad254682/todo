import storageService from './storageService.js'

var todos = storageService.load('todos') || [{ _id: 'c1', content: 'hello' },
{ _id: 'c2', content: 'world' },
{ _id: 'c3', content: 'ohad' }];

export default {
    query,
    save,
    remove,
    get
}

function query() {
    return Promise.resolve(todos);
}

function get(id) {
    return Promise.resolve(todos.find(todo => todo._id === id))
}

function remove(id) {
    const idx = todos.findIndex(todo => todo._id === id)
    todos.splice(idx, 1)
    storageService.store('todos', todos)
    Promise.resolve();
}

function save(todo) {
    if (todo._id) {
        const idx = todos.findIndex(todo => todo._id === todo.id)
        todos.splice(idx, 1, todo)

    } else {
        todo._id = _makeId()
        todos.push(todo)
    }
    storageService.store('todos', todos)
    return Promise.resolve(todo);
}

function _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
