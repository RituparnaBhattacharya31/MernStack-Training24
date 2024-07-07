import { createContext, useReducer } from "react"
import { TodoReducer } from "./TodoReducer";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const initialState = {
        todoList: []
    }
    const [state, dispatch] = useReducer(TodoReducer, initialState)
    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}