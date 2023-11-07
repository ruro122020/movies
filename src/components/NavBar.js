import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const NavBar = () => {

  return (
    <Menu pointing>
      <Menu.Item>
        <NavLink to='/'>Movies</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to='/new-movie'>Add Movie</NavLink>
      </Menu.Item>
    </Menu>
  )
}

export default NavBar
