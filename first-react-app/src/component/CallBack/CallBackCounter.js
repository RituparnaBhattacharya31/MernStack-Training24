import React, { useCallback, useState } from 'react'
import TodoList from './TodoList';

function CallBackCounter() {
    const [count, setCount] = useState(0);
    const [todoList, setTodoList] = useState([]);
    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const addTodo = useCallback(() => {
        setTodoList((prevTodo) => [...prevTodo, "New task"]);
    }, [todoList]);
    // const increment = useCallback(() => {
    //     setCount((prevCount) => prevCount + 1)
    // }, []);

    return (
        <div>
            <h1>To-do List</h1>
            <TodoList todoList={todoList} addTodo={addTodo} />

            <p>Count : {count}</p>
            <button onClick={increment}>Increment</button><br></br>
        </div>
    )
}

export default CallBackCounter