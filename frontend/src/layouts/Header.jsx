import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to="/aboutUs">About Us</NavLink>
        <NavLink>Contact Us</NavLink>
        <NavLink>Login</NavLink>
    </div>
  )
}

export default Header