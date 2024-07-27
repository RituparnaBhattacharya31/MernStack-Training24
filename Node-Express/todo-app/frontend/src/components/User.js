import React, { useEffect, useState } from 'react';
import axios from "axios";

function User() {
    const [userList, setUserList] = useState([]);
    const [newUser, setNewUser] = useState("");

    const backend_endpoint = process.env.REACT_APP_BACKEND_ENDPOINT;
    useEffect(() => {
        fetchUserList();
    }, [])

    const fetchUserList = () => {
        axios.get(`${backend_endpoint}/users`).then((response) => {
            setUserList(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    // const handleAddTodo = () => {
    //     if (newUser === "") {
    //         return
    //     } else {
    //         let newTodoObj = {
    //             "task": newTodo,
    //             "completed": "Not completed"
    //         }
    //         axios.post(`${backend_endpoint}/todos`, newTodoObj).then((response) => {
    //             console.log(response.data)
    //             setTododList([...userList, response.data]);
    //             setNewTodo("");
    //         }).catch((err) => {
    //             console.error("Error creating todo: ", err)
    //         })
    //     }
    // }

    // const handleUpdateTodo = (id, updatedTodo) => {
    //     console.log(id, updatedTodo)
    //     axios.put(`${backend_endpoint}/todos/${id}`, updatedTodo).then((response) => {
    //         todoList.map((todo) => {
    //             if (todo.todo_id === id) {
    //                 todo.todo_id = response.data.id
    //                 todo.task = response.data.task
    //                 todo.completed = response.data.completed
    //                 todo.status = todo.status
    //             }
    //         }
    //         )
    //         setTododList(todoList);
    //     }).catch((err) => {
    //         console.error("Error creating todo: ", err)
    //     })
    // }

    // const handleDeleteTodo = (id) => {
    //     axios.delete(`${backend_endpoint}/todos/${id}`).then(() => {
    //         setTododList(todoList.filter((todo) => todo.todo_id !== id));
    //     }).catch((err) => {
    //         console.error("Error creating todo: ", err)
    //     })
    // }

    return (
        <div>
            <h2>User List</h2>
            <img src='http://localhost:5000/image/nature.jpg' />
            {/* <input name='todo' value={newUser} onChange={(e) => setNewUser(e.target.value)} />
            <button onClick={handleAddTodo}>Add User</button> */}
            <ul>
                {userList.length > 0 && (
                    userList.map((user) => (
                        <>
                            <li key={user.user_id}>
                               {user.user_name}
                            </li>
                            {/* <button onClick={() => handleUpdateTodo(todoList.todo_id, {
                                ...todoList,
                                task: updatedTodo
                            })}>Update todo</button> */}
                            {/* <button onClick={() => handleDeleteTodo(todoList.todo_id)}>Delete</button> */}
                        </>
                    ))
                )}</ul>
        </div>
    )
}

export default User