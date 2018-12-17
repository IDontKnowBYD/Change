import React from 'react'

const FooterLink = ({ active, children, onFilter }) => {
  // 是否激活
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault()
        onFilter()
      }}
    >
      {children}
    </a>
  )
}

export default FooterLink
