export const TodoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return { ...state, todoList: [...state.todoList, {id: Math.random(), task: action.payload }] }
        case "REMOVE_TODO":
            return { ...state, todoList: state.todoList.filter(todo => todo.id !== action.payload) }
    }
}