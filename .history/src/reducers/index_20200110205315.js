export function rootReducer(state = { todos: [], todosToShow: [], searchTerm: 'ALL' }, action = {}) {
    switch (action.type) {

        case 'TODO_SEARCHTERM': {
            return {
                ...state, searchTerm: action.searchTerm
            }
        }
        case 'TODO_FILTER':
            if (state.searchTerm === 'ALL') {
                return {
                    ...state, todosToShow: state.todos
                }
            }
            else if (state.searchTerm === 'DONE') {
                return {
                    ...state, todosToShow: state.todos.filter(todo => todo.isDone)
                }
            }
            else if (state.searchTerm === 'ACTIVE') {
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
        case 'TODO_PUT':
            return {
                ...state, todos: state.todos.map(todo => todo._id !== action.todo._id ? todo : action.todo)
            }
        case 'TODO_POST':

            return {
                ...state, todos: [...state.todos, action.todo]
            }

        case 'SET_TODOS':
            return {
                ...state, todos: action.todos
            }

    }
    return state;
}