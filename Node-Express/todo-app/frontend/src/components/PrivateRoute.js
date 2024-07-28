import React from 'react'
import { Navigate, Route } from 'react-router-dom'

function PrivateRoute({ element: Component, ...rest }) {
    const accessToken = localStorage.getItem("accessToken")
    return (
        accessToken ? <Component {...rest} /> : <Navigate to="/login" />
    )
}

export default PrivateRoute