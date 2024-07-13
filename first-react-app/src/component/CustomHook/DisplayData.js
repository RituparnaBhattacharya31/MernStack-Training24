import React from 'react'
import useFetch from './useFetch'
import loader from "../Glass lines.gif"

function DisplayData() {
    let url = "https://jsonplaceholder.typicode.com/users"
    const { data, loading, error } = useFetch(url);

    if (loading) {
        return <div>Loading data....
            <img src={loader}></img>
        </div>
    }

    if (error !== "") return <div>Error : {error.message}</div>

    return (
        <>
            <div>Display Data</div>
            <ul>
                {
                    data.map((user, index) => (
                        <li key={index}>Hi my name is {user.name}, this is my website <a href={user.website}>{user.website} </a></li>
                    ))
                }
            </ul>
        </>
    )
}

export default DisplayData