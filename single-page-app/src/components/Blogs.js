import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Post from './Post'

function Blogs() {
  return (
    <>
     <div>Blogs</div>
     <nav>
        <Link to="posts/1">Post 1</Link><br></br>
        <Link to="posts/2">Post 2</Link><br></br>
        <Link to="posts/3">Post 3</Link><br></br>
        <Link to="posts/2">Post 4</Link><br></br>
     </nav>
     <Routes>
        <Route path="posts/:postid" element={<Post />}></Route>
     </Routes>
    </>
   
  )
}

export default Blogs