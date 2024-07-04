import React, { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const [itemsLists, setItemLists] = useState(["Rice", "Pulse", "Vegetables"]);
    const [newItem, setNewItem] = useState("");

    function increment() {
        console.log("within increment")
        setCount(count + 1);
    }

    console.log(itemsLists)
    function addItem() {
        // let itemsArray = [...itemsLists];
        // console.log(itemsArray)
        // itemsArray.push(newItem);
        // setItemLists(itemsArray);
        setItemLists([...itemsLists, newItem])
        setNewItem("");
    }

    const handleChange=(e)=>{
        console.log(e.target.value)
        setNewItem(e.target.value)
    }
    return (
        <div>
            {/* <p>Current count : {count}</p>
            <button onClick={increment}>increment</button> */}
            <input name="newitem" type="text" value={newItem} onChange={handleChange}></input>
            <button onClick={addItem}>Add Item</button><br></br>
            <h2>Item list</h2>
            <ul>
                {
                    itemsLists.map((item, index) => (
                        <li key={index}>{index + 1}. {item}</li>
                    ))
                }
            </ul>
           
        </div>
    )
}
