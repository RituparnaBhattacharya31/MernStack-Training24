import React, { useState } from "react";
import Component2 from "./Component2";
import { UserContext } from "./userContext";
function Component1() {
    const [user, setUser] = useState("John Doe");

    return (
        <>
            <UserContext.Provider value={user}>
                <Component2 user={user} setUser={setUser} />
            </UserContext.Provider>
        </>
    )
}

export default Component1;