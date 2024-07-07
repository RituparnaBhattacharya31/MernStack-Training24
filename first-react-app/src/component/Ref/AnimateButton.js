import React, { useRef } from 'react'
import "./style.css";

function AnimateButton() {
    const buttonRef = useRef(null);

    const animateButton = () =>{
        buttonRef.current.classList.toggle("animate");
    }
    return (
        <div>
            <button ref={buttonRef} onClick={animateButton}>Animate Button</button>
        </div>
    )
}

export default AnimateButton