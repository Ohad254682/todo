import TodosService from "../services/TodosService";

// THUNK
export function loadTodos() {
    return (dispatch) => {
        TodosService.query()
            .then(todos => {
                dispatch(setTodos(todos))
            })
    }
}

function setTodos(todos) {
    return {
        type: 'SET_TODOS',
        todos
    }
}

// THUNK
export function removeTodo(todoId) {
    return (dispatch) => {
        TodosService.remove(todoId)
            .then(() => {
                dispatch({ type: 'TODO_REMOVE', todoId })
            })
    }
}
export function saveTodo(editedTodo) {
    return (dispatch) => {
        TodosService.save(editedTodo)
            .then((todo) => {
                dispatch({ type: 'TODO_SAVE', todo })
            })
    }
}

export function toggleIsDone(todoId) {
    return (dispatch) => {
        TodosService.toggleIsDone(todoId)
            .then((todo) => {
                dispatch({ type: 'TODO_TOGGLEISDONE', todo })
            })
    }
}

export function filterBy(searchTerm) {
    return (dispatch) => {
        dispatch({ type: 'TODO_FILTER', searchTerm })
    }
}




