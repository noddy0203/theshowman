import React from 'react'
import { NavLink } from "react-router-dom"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <div className='headerStyle'>
      <NavLink to="/">
        <img className='logo' src="./images/logo_final.png" alt="" />
      </NavLink>
      <Navbar />
    </div>
  )
}

export default Header

