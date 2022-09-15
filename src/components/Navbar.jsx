import React from 'react'
import { NavLink } from "react-router-dom"
import { CgMenu, CgCloseR } from "react-icons/cg"
import { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(true)
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()
  return (
    <nav>
      <div className={openMenu ? 'menuIcon active' : "menuIcon"}>
        <ul className='navbar-list'>
          <li>
            <NavLink onClick={() => setOpenMenu(false)} className="navbar-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setOpenMenu(false)} className="navbar-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setOpenMenu(false)} className="navbar-link" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setOpenMenu(false)} className="navbar-link" to="/contact">
              Contact
            </NavLink>
          </li>
          {
            isAuthenticated &&
            <li>
              <p className='user_detail'>{user.name}</p> 
            </li>
          }

          {
            isAuthenticated ? <li>
              <button className='auth_btn' onClick={() => logout({ returnTo: window.location.origin })}> Log Out </button>
            </li>
              :
              <li>
                <button className='auth_btn' onClick={() => loginWithRedirect()}>Log In</button>
              </li>
          }

        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu name='menu-outline' className='mobile-nav-icon' onClick={() => setOpenMenu(true)} />
          <CgCloseR name='close-outline' className='close-outline mobile-nav-icon' onClick={() => setOpenMenu(false)} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar