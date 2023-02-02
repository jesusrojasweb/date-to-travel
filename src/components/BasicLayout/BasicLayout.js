import React from 'react'
import Menu from '../Menu/Menu'
import './BasicLayout.css'

function BasicLayout({ children }) {
  return (
    <section className="BasicLayout">
      {children}
      <Menu />
    </section>
  )
}

export default BasicLayout
