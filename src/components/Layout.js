import React from 'react'
import Menubar from './Menubar'

const Layout = ({ children }) => {
  return (
    <main className="container">
      <Menubar />
      <div>{children}</div>
    </main>
  )
}

export default Layout
