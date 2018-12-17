/* 
  展示组件
*/

import React from 'react'
import FooterLink from '../containers/FooterLink'

const Footer = () => {
  return (
    <p>
      Show: <FooterLink filter="SHOW_ALL">All</FooterLink>
      {', '}
      <FooterLink filter="SHOW_ACTIVE">Active</FooterLink>
      {', '}
      <FooterLink filter="SHOW_COMPLETED">Completed</FooterLink>
    </p>
  )
}

export default Footer
