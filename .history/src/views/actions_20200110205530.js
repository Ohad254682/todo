import TodosService from "../services/TodosService";

// THUNK
export function loadTodos() {
    return (dispatch) => {
        return TodosService.query()
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
        return TodosService.remove(todoId)
            .then(() => {
                dispatch({ type: 'TODO_REMOVE', todoId })
            })
    }
}
export function saveTodo(editedTodo) {
    return (dispatch) => {
        if (editedTodo._id) {
            return TodosService.save(editedTodo)
                .then((todo) => {
                    dispatch({ type: 'TODO_PUT', todo })
                })
            }
        else {
                return TodosService.save(editedTodo)
                    .then((todo) => {
                        dispatch({ type: 'TODO_POST', todo })
                    })
            }
    }
}

export function toggleIsDone(todoId) {
    return (dispatch) => {
        return TodosService.toggleIsDone(todoId)
            .then((todo) => {
                dispatch({ type: 'TODO_TOGGLEISDONE', todo })
            })
    }
}

export function filterBy() {
    return (dispatch) => {
        dispatch({ type: 'TODO_FILTER' })
        return Promise.resolve();
    }
}

export function setSearchTerm(searchTerm) {
    return (dispatch) => {
        dispatch({ type: 'TODO_SEARCHTERM', searchTerm })
        return Promise.resolve();
    }
}




