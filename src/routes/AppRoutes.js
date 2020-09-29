import React from 'react'
import { Router } from '@reach/router'
import Projects from '../pages/Projects'
import Home from '../pages/Home'
import Education from '../pages/Contact'
import Contact from '../pages/Contact'

const AppRoutes = ({ user }) => {
  return (
    <Router>
      <Home path="/" />
      <Projects user={user} path="/projects" />
      <Education user={user} path="/education" />
      <Contact user={user} path="/contact-me" />
    </Router>
  )
}

export default AppRoutes
