import React, { useContext, useState } from 'react'
import { TodoContext } from './TodoProvider';

function AddTodo() {
    var count = 0;
    console.log(count + 1);
    const [tempVal, setTempVal] = useState("");
    const { dispatch } = useContext(TodoContext);

    const addTodo = () => {
        dispatch({ type: "ADD_TODO", payload: tempVal });
        setTempVal("");
    }
    return (
        <>
            <input type="text" value={tempVal} onChange={(e) => setTempVal(e.target.value)}></input>
            <button onClick={addTodo}>Add Item</button><br></br>
        </>
    )
}

export default AddTodo;