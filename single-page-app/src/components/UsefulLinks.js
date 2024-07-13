import React from 'react'
import { Link } from 'react-router-dom'
import ResponsiveAppBar from './ResponsiveAppBar'

function UsefulLinks() {
    return (
        <>
        <ResponsiveAppBar />
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav> */}
        </>
    )
}

export default UsefulLinks