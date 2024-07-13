import React, { useEffect, useState } from 'react'
import usePrevious from './usePrevious';

function CounterComp() {

    const [count, setCounter] = useState(0);
    const prevCount = usePrevious(count);

    useEffect(()=>{
        console.log(`Previous count : ${prevCount}`);
    }, [count]);

    return (
        <div>
            <p>Current count : {count}</p>
            <p>Previous count : {prevCount}</p>

            <button onClick={() => setCounter((prevCount) => prevCount + 1)}>Increment</button>
        </div>
    )
}

export default CounterComp