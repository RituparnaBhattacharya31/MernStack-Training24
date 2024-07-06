import React, { useContext } from 'react'
import { useAuth } from './AuthContext'
import { UserContext } from './UserContext';

function ProtectedComponent() {
    const {isLoggedIn} = useAuth();
    const user = useContext(UserContext);
    console.log(user)
  return (
    <div>
        {
            isLoggedIn ?
            <h1>Welcome {user}! You are logged in.</h1>
            :
            <h1>Please login to continue!</h1>
        }
    </div>
  )
}

export default ProtectedComponent