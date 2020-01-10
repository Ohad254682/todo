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
                dispatch({type: 'TODO_REMOVE', todoId})
            })
    }
}
export function saveCar(car) {
    return (dispatch) => {
        const actionType = (car._id)? 'CAR_UPDATE' : 'CAR_ADD'; 
        TodosService.save(car)
            .then((car) => {
                dispatch({type: actionType, car})
            })
    }
}



