import React, { useEffect, useState } from 'react';
import axios from "axios";

function Todo() {
    const [todoList, setTododList] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const backend_endpoint = process.env.REACT_APP_BACKEND_ENDPOINT;
    useEffect(() => {
        fetchTodos();
    }, [])

    const fetchTodos = () => {
        axios.get(`${backend_endpoint}/todos`).then((response) => {
            setTododList(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleAddTodo = () => {
        let newTodoObj = {
            "task": newTodo,
            "completed": "Not completed"
        }
        axios.post(`${backend_endpoint}/todos`, newTodoObj).then((response) => {
            console.log(response.data)
            setTododList([...todoList, response.data]);
            setNewTodo("");
        }).catch((err) => {
            console.error("Error creating todo: ", err)
            alert(err.response.data.error)
        })
    }

    const handleUpdateTodo = (id, updatedTodo) => {
        console.log(id, updatedTodo)
        axios.put(`${backend_endpoint}/todos/${id}`, updatedTodo).then((response) => {
            todoList.map((todo) => {
                if (todo.todo_id === id) {
                    todo.todo_id = response.data.id
                    todo.task = response.data.task
                    todo.completed = response.data.completed
                    todo.status = todo.status
                }
            }
            )
            setTododList(todoList);
        }).catch((err) => {
            console.error("Error creating todo: ", err)
        })
    }

    const handleDeleteTodo = (id) => {
        axios.delete(`${backend_endpoint}/todos/${id}`).then(() => {
            setTododList(todoList.filter((todo) => todo.todo_id !== id));
        }).catch((err) => {
            console.error("Error creating todo: ", err)
        })
    }

    return (
        <div>
            <h2>Todo List</h2>
            <input name='todo' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={handleAddTodo}>Add todo</button>
            <ul>
                {todoList.length > 0 && (
                    todoList.map((todoList) => (
                        <>
                            <li key={todoList.todo_id}>
                                <input type='text' defaultValue={todoList.task} onChange={(e) => handleUpdateTodo(todoList.todo_id, {
                                    ...todoList,
                                    task: e.target.value
                                })} />
                                <input type='checkbox' defaultChecked={todoList.completed === "Completed" ? true : false} onChange={(e) =>
                                    handleUpdateTodo(todoList.todo_id, {
                                        ...todoList,
                                        completed: e.target.checked ? "Completed" : "Not completed"
                                    })
                                } />
                            </li>
                            {/* <button onClick={() => handleUpdateTodo(todoList.todo_id, {
                                ...todoList,
                                task: updatedTodo
                            })}>Update todo</button> */}
                            <button onClick={() => handleDeleteTodo(todoList.todo_id)}>Delete</button>
                        </>
                    ))
                )}</ul>
        </div>
    )
}

export default Todo