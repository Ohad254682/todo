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
        type: 'SET_CARS',
        cars
    }
}

// THUNK
export function removeCar(carId) {
    return (dispatch) => {
        CarService.remove(carId)
            .then(() => {
                dispatch({type: 'CAR_REMOVE', carId})
            })
    }
}
export function saveCar(car) {
    return (dispatch) => {
        const actionType = (car._id)? 'CAR_UPDATE' : 'CAR_ADD'; 
        CarService.save(car)
            .then((car) => {
                dispatch({type: actionType, car})
            })
    }
}



