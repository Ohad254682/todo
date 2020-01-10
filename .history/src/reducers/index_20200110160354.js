export function rootReducer(state = { todos: [], todosToShow:[] }, action = {}) {
    switch (action.type) {
        case 'TODO_FILTER':
            if (action.searchTerm === 'DONE') {
                return {
                    ...state, todosToShow: state.todos.filter(todo => todo.isDone)
                }
            }
            else if (action.searchTerm === 'ACTIVE') {
                return {
                    ...state, todosToShow: state.todos.filter(todo => !todo.isDone)
                }
            }
        case 'TODO_TOGGLEISDONE':
            return {
                ...state, todos: state.todos.map(todo => todo._id !== action.todo._id ? todo : action.todo)
            }
        case 'TODO_REMOVE':
            return { ...state, todos: state.todos.filter(todo => todo._id !== action.todoId) }
        case 'TODO_SAVE':
            if (action.todo._id) {
                return {
                    ...state, todos: state.todos.map(todo => todo._id !== action.todo._id ? todo : action.todo)
                }
            }
            else {
                return {
                    ...state, todos: [...state.todos, action.todo]
                }
            }
        case 'SET_TODOS':
            return {
                ...state, todos: action.todos
            }

    }
    return state;
}