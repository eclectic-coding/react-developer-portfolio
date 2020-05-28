import React from 'react'
import { Router } from '@reach/router'
import Projects from '../pages/Projects'
import Home from '../pages/Home'
import Education from '../pages/Education'

const AppRoutes = ({ user }) => {
  return (
    <Router>
      <Home path="/" />
      <Projects user={user} path="/projects" />
      <Education user={user} path="/education" />
    </Router>
  )
}

export default AppRoutes
