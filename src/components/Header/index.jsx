import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login" >Login</NavLink>
          </nav>
      </header>
    <Outlet />
    </>
  )
}

export default Header
