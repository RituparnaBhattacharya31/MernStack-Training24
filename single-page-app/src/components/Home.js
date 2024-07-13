import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  const naviagte = useNavigate();

  const handleNavigate = () => {
    let data = { "month": 7, weekDay: "Saturday" }
    console.log("within handlenavigate")
    naviagte("/", { state: data });
  }

  return (
    <>
      <div>Home Page</div>
      <button onClick={handleNavigate}>Go to Dashboard</button>
    </>
  )
}

export default Home