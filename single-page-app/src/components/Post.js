import React from 'react'
import { useParams } from 'react-router-dom'

function Post() {
    let { postid } = useParams();
    console.log("Hi")
    return (
        <div>
            <h2>Post Id: {postid}</h2>
        </div>
    )
}

export default Post