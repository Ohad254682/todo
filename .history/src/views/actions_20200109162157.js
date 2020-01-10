import TodosService from "../services/TodosService";

// THUNK
export function loadTodos() {
    return (dispatch) => {
        TodosService.query()
            .then(todos => {
                dispatch(setCars(todos))
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
export function saveCar(todo) {
    return (dispatch) => {
        TodosService.save(todo)
            .then((todo) => {
                dispatch({ type: 'TODO_SAVE', todo })
            })
    }
}



