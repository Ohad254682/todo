export function rootReducer(state = { todos: [] }, action = {}) {
    switch (action.type) {
        case 'TODO_TOGGLEISDONE':
            var updatedTodos = state.todos.map(todo => todo._id !== action.todo.id ? todo : action.todo)
            return {
                ...state,
            }
        case 'TODO_REMOVE':
            return { ...state, todos: state.todos.filter(todo => todo._id !== action.todoId) }
        case 'TODO_SAVE':
            if (action.todo._id) {
                return {
                    ...state, todos: state.todos.map(todo => todo._id !== action.todo.id ? todo : action.todo)
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