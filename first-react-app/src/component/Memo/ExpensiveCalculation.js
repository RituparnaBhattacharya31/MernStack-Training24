import React, { useMemo, useState } from 'react'

function ExpensiveCalculation() {
    
    const expensiveCalculation = (num) =>{
        console.log("calculating.....")
        for(let i = 0; i < 100000000; i ++) {
            num += 1;
        }
        return num;
    }
    const [count, setCount] = useState(0);
    const [todoList, setTodoList] = useState([]);
    const calculation = useMemo(()=> {
       return expensiveCalculation(count)
    }, [count]);

    // const calculation = expensiveCalculation(count);
    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const addTodo = () => {
        setTodoList((prevTodo) => [...prevTodo, "New task"]);
    };

    return (
        <div>
            <div>
                <button onClick={addTodo}>Add todo</button>
                {
                    todoList.map((todo, index) => (
                        <p>{index + 1}. {todo}</p>
                    ))

                }
            </div>

            <div>
                <p>Count : {count}</p>
                <button onClick={increment}>Increment</button><br></br>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    )
}

export default ExpensiveCalculation