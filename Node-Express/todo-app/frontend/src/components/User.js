import React, { useEffect, useState } from 'react';
import axios from "axios";

function User() {
    const [userList, setUserList] = useState([]);

    const backend_endpoint = process.env.REACT_APP_BACKEND_ENDPOINT;
    useEffect(() => {
        fetchUserList();
    }, [])

    const fetchUserList = () => {
        axios.get(`${backend_endpoint}/users`, {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }).then((response) => {
            setUserList(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <h2>User List</h2>
            <img src='http://localhost:5000/image/nature.jpg' />
            <ul>
                {userList.length > 0 && (
                    userList.map((user) => (
                        <>
                            <li key={user.user_id}>
                                {user.user_name}
                            </li>
                        </>
                    ))
                )}</ul>
        </div>
    )
}

export default User