import React, { useState } from "react";
import axios from "axios";

export const ToDoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");
    console.log(todoList)

    function fetchTodos() { 
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>{
            // console.log(response.data)
            setTodoList(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    function addItem() {
        setTodoList([...todoList, newTask])
        setNewTask("");
    }

    const handleChange=(e)=>{
        console.log(e.target.value)
        setNewTask(e.target.value)
    }

    return (
        <div>
            <button onClick={fetchTodos}>Fetch Todo List</button><br></br>
            <input name="newitem" type="text" value={newTask} onChange={handleChange}></input>
            <button onClick={addItem}>Add New Task</button><br></br>
            <h2>Todo list</h2>
            <ul>
                {
                    todoList.map((item, index) => (
                        <li key={index}>{index + 1}. {item.title}</li>
                    ))
                }
            </ul>
           
        </div>
    )
}
