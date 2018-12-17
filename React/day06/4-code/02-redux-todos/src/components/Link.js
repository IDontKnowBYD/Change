import React from 'react'
import { NavLink } from 'react-router-dom'

import '../css/index.css'

const FooterLink = ({ filter, children }) => {
  return (
    <NavLink exact to={filter}>
      {children}
    </NavLink>
  )
}

export default FooterLink
