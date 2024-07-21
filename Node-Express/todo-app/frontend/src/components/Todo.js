import React, { useEffect, useState } from 'react';
import axios from "axios";

function Todo() {
    const [todoList, setTododList] = useState([]);

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

    return (
        <div>
            <h2>Todo List</h2>
            <ul>{todoList.length > 0 && (
                todoList.map((todoList) =>(
                    <li>{todoList.task}</li>
                ))
            )}</ul>
        </div>
    )
}

export default Todo