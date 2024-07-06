import React, { useContext, useState } from "react";
import { UserContext } from "./userContext";
function Component5() {
    const user = useContext(UserContext);
    return (
        <>
            <h1>Hi, {user}</h1>
        </>
    )
}

export default Component5;