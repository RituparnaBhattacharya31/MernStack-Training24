import React, { useRef } from 'react'

function UnControlledForm() {
    const inputEle = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputEle.current.value);
    }

    const handleChange = (e) => {
        console.log(inputEle.current.value)
        if (inputEle.current.value !== "") {
            if (!isNaN(inputEle.current.value)) {
                alert("Only String is allowed!")
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputEle} onChange={handleChange}></input>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default UnControlledForm