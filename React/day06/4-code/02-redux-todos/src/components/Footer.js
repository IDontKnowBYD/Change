/* 
  展示组件
*/

import React from 'react'
import Link from './Link'

const Footer = () => {
  return (
    <p>
      Show: <Link filter="/">All</Link>
      {', '}
      <Link filter="/active">Active</Link>
      {', '}
      <Link filter="/completed">Completed</Link>
    </p>
  )
}

export default Footer
