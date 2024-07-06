import React, { useEffect, useState } from "react";
import axios from "axios";

export const ToDoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [updatedTask, setUpdatedTask] = useState("");
    const [editable, setEditable] = useState(false);
    const [rowIndex, setRowIndex] = useState(null);
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
    console.log("Render happened!")

    console.log(newTask)
    function fetchTodos() {
        axios.get("http://localhost:5000/todos")
            .then((response) => {
                console.log(response.data)
                setTodoList(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    function addTodo(newTodoObj) {
        axios.post("http://localhost:5000/todos",
            newTodoObj
        ).then((response) => {
            console.log(response.status);
            // console.log(response.data);
            console.log("Item added successfully!");
            fetchTodos();
        }).catch((err) => {
            console.log("Some error!");
        })
    }

    function updateTodo(id) {
        var itemToUpdate = todoList.filter((todo) => todo.id === id);
        var updatedTodoObj = {
            ...itemToUpdate,
            title: updatedTask
        }
        axios.put(`http://localhost:5000/todos/${itemToUpdate.id}`,
            updatedTodoObj
        ).then((response) => {
            console.log(response.status);
            // console.log(response.data);
            console.log("Item updated successfully!");
            setEditable(false)
            fetchTodos();
        }).catch((err) => {
            console.log("Some error!");
        })
    }

    function deleteItem(itemToDelete) {
        axios.delete(`http://localhost:5000/todos/${itemToDelete.id}`).then((response) => {
            console.log(response.status);
            // console.log(response.data);
            console.log("Item delete successfully!");
            fetchTodos();
        }).catch((err) => {
            console.log(err.response.status)
            console.log(err.response.data)
            alert(err.response.data);
            console.log("Some error!");
        })
    }

    function updateTododState(rowNum) {
        setRowIndex(rowNum);
        setEditable(true);
    }

    useEffect(() => {
        //     let timer = setTimeout(() => {
        //         setCount((count) => count + 1);
        //         console.log("count", count);
        //     }, 1000);
        //    return () => clearTimeout(timer);
        fetchTodos();
    }, []);

    // useEffect(() => {
    //     if (todoList.length > 0) {
    //         addTodo();
    //     }
    // }, [todoList]);

    // useEffect(() => {
    //     setMessage("Data fetched and counter incremented!")
    // }, [count])

    function addItem() {
        var lastTodoObj = todoList[todoList.length - 1];
        console.log(lastTodoObj)
        var newTodoObj = {
            ...lastTodoObj,
            id: lastTodoObj.id + 1,
            title: newTask,
            completed: true
        }
        // // setTodoList([...todoList, newTask])
        addTodo(newTodoObj);
        // setNewTask("");
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setNewTask(e.target.value)
    }

    return (
        <div>
            {/* <button onClick={fetchTodos}>Fetch Todo List</button><br></br> */}
            {/* Count : {count} <br></br>
            Message : {message} <br></br> */}
            <input name="newitem" type="text" value={newTask} onChange={handleChange}></input>
            <button onClick={addItem}>Add New Task</button><br></br>
            {/* <button onClick={addTodo}>Add toto</button> */}
            <h2>Todo list</h2>
            <>
                {
                    todoList.length > 0 ?
                        todoList.map((item, index) => (
                            <>
                                <div style={{ display: "inline-flex" }}>
                                    {
                                        // !editable && rowIndex !== index ?
                                        //     <div><div key={index}>{index + 1}. {item.title}</div> <button onClick={() => updateTododState(index)}>Update</button></div>
                                        //     :
                                        editable && rowIndex === index ?
                                            <div key={index}>{index + 1}. <input type="text" name="todo" defaultValue={item.title} onChange={(e) => setUpdatedTask(e.target.value)} /><button onClick={() => updateTodo(item.id)}>Save</button></div>
                                            :
                                            <div style={{ display: "inline-flex" }}><div key={index}>{index + 1}. {item.title}</div> <button onClick={() => updateTododState(index)}>Update</button>  <button onClick={() => deleteItem(item)}>Delete</button></div>
                                    }

                                </div><br></br>
                            </>
                        ))
                        :
                        ""
                }
            </>

        </div>
    )
}
