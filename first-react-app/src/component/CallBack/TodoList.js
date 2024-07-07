import React, { memo } from 'react'

function TodoList({ todoList, addTodo }) {
    console.log("to-do list rendered!")
    return (
        <div>
            <button onClick={addTodo}>Add todo</button>
            {
                todoList.map((todo, index) => (
                    <p>{index+1}. {todo}</p>
                ))

            }</div>
    )
}

export default memo(TodoList);