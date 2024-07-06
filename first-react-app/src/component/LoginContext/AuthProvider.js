import React, { useState } from 'react'
import { AuthContext } from './AuthContext'
import { UserContext } from './UserContext';

function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState("");
    const login = () => {
        setIsLoggedIn(true)
        setUser("John")
    }

    const logout = () => {
        setIsLoggedIn(false)
        setUser("")
    }
    
    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            <UserContext.Provider value={user}>
                {children}
            </UserContext.Provider>
        </AuthContext.Provider>
    )
}

export default AuthProvider