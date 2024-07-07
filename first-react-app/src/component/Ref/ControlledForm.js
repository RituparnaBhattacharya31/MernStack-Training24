import React, { useState } from 'react'

function ControlledForm() {
    const [tempVal, setTempVal] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(tempVal);
    }

    const handleChangeVal = (e) => {
        console.log("within handleChange")

        console.log(typeof (e.target.value))
        console.log(isNaN(e.target.value))
        if (e.target.value !== "") {
            if (!isNaN(e.target.value)) {
                alert("Only String is allowed!")
            } else {
                setTempVal(e.target.value)
            }
        }
    }

    const handleChangeCity = (e) => {
        if (country !== "") {
            setState(e.target.value)
        } else {
            alert("Please provide country first!")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            Name : <input type="text" value={tempVal} onChange={(e) => handleChangeVal(e)}></input> <br></br>
            Country : <input type="text" value={country} onChange={(e) => setCountry(e.target.value)}></input><br></br>
            State : <input type="text" value={state} onChange={handleChangeCity}></input>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default ControlledForm