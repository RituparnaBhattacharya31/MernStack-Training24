import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Profile from './Profile';
import Settings from './Settings';

function Dashboard() {
    const location = useLocation();
    const { state } = location;
    console.log(state)

    return (
        <>
            <div>Dashboard</div>
            <p>Week Day : {state?.weekDay}</p>
            <p>Month : {state?.month}</p>

            <nav>
                <Link to="profile">User Profile</Link><br />
                <Link to="settings">Settings</Link>
            </nav>
            <Routes>
                <Route path="profile" element={<Profile />}></Route>
                <Route path="settings" element={<Settings />}></Route>
            </Routes>
        </>
    )
}

export default Dashboard