import React, { useContext, useState } from 'react'
import { useAuth } from './AuthContext'
import { UserContext } from './UserContext';

export default function LoginComponent() {
    const { isLoggedIn, login, logout } = useAuth();
    const hadleLogin = () => {
        console.log("Login")
        login();
    }

    const hadleLogout = () => {
        console.log("Logout")
        logout();
    }

    return (
        <div>
            {
                !isLoggedIn ?
                    <button onClick={hadleLogin}>Login</button>
                    :
                    <button onClick={hadleLogout}>Logout</button>
            }
        </div>
    )
}
