import axios from 'axios';
import React, { useEffect, useState } from 'react'
import qs from "qs";
import { useNavigate } from 'react-router-dom';

function UserLogin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    useEffect(()=>{
        localStorage.removeItem("accessToken");
    });

    const backend_endpoint = process.env.REACT_APP_BACKEND_ENDPOINT;

    const handleLogin = (e) => {
        e.preventDefault();
        // using application/json url encoded type
        // let userObj = { username, password };

        // using application/x-www-form-urlencoded encoded type 
        // const formData = qs.stringify({username, password});
        // console.log(formData);

        // using multipart/form-data encoded type 
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        axios.post(`${backend_endpoint}/userLogin`, formData, {
            headers: {
                // "Content-Type": "application/json"
                // "Content-Type": "application/x-www-form-urlencoded"
                "Content-Type": "multipart/form-data"
            }
        }).then((res) => {
            if (res.data.accessToken) {
                localStorage.setItem("accessToken", res.data.accessToken);
                navigate("/home")
            }
        }).catch((err) => {
            console.log(err)
            alert(err.response.data)
        })
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username : </label>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password : </label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default UserLogin