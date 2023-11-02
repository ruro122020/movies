import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/'>Movies</NavLink>
      <NavLink to='/new-movie'>Add Movie</NavLink>
    </nav>
  )
}

export default NavBar
