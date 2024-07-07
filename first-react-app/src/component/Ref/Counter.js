import React, { useEffect, useRef, useState } from 'react'

function Counter() {
    const inputEle = useRef();
    const [tempVal, setTempVal] = useState("");
    const previousVlalue = useRef("");
    // const [count, setCount] = useState(0);
    // console.log(count);
    // console.log(tempVal);
    // useEffect(() => {
    //     count.current = count.current + 1;
    //     // setCount(() => count + 1);
    // });

    useEffect(()=>{
        console.log(`value changed from ${previousVlalue.current} to ${tempVal}`);
        previousVlalue.current = tempVal
    },[tempVal])

    const focusInput = () =>{
        inputEle.current.focus();
    }

    return (
        <div>
            <input type="text" ref={inputEle} value={tempVal} onChange={(e)=>setTempVal(e.target.value)}></input>
            <button onClick={focusInput}>Focus Input</button>
            {/* <h1>Count : {count.current}</h1> */}
        </div>
    )
}

export default Counter