import React, { useContext, useReducer } from 'react'
import { TodoContext } from './TodoProvider'

function ViewTodoList() {
    const { state, dispatch } = useContext(TodoContext);
    console.log(state)
    return (
        <>
            {
                state.todoList.length > 0 &&
                state.todoList.map((todo) => (
                    <>
                        <div style={{ display: "inline-flex" }}>
                            <div>{todo.task}</div>
                            <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}>Delete Item</button>
                        </div><br></br>
                    </>
                ))
            }
        </>

    )
}

export default ViewTodoList