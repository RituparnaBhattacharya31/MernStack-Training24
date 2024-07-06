import React, { useEffect, useState } from "react";
import Component3 from "./Component3";
function Component2({user, setUser}) {
    useEffect(()=>{
        setUser("Alice")
    },[])
    return (
        <>
            <Component3 user={user} />
        </>
    )
}

export default Component2;