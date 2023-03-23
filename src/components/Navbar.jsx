import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul class= "navbar-nav me-auto mb-2 mb-lg-0" >
            <li class = "nav-item"><Link to="/api/players">Home</Link></li>
            <li class = "nav-item"><Link to="/api/players/create">Create Player</Link></li>
        </ul>
    </div>
  )
}

export default Navbar