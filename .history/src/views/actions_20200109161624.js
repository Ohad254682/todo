import TodosService from "../services/TodosService";

export const inc = () => ({ type: 'INC' });

// THUNK
export function incAsync() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: 'INC' })
        }, 1000)
    }
}
// THUNK
export function loadCars() {
    return (dispatch) => {
        CarService.query()
            .then(cars => {
                dispatch(setCars(cars))
            })
    }
}

function setCars(cars) {
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



