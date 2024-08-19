import React from 'react'
import { Link } from "react-router-dom"

function Heading() {
  return (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
        }}>
        <h1>Hello, React!</h1>
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            width:"50%",
            marginBottom: "10px"
        }}>
            <Link to="/">home</Link>
            <Link to="/upload">upload</Link>
            <Link to="/list">list</Link>
        </div>
    </div>
    
  )
}

export default Heading
