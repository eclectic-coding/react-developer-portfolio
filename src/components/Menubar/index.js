import React from 'react'
import { Link } from '@reach/router'
// Styling Component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'


const Menubar = ({ user }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="has-text-primary is-size-2"
              // style={{ fontSize: '2em' }}
            />
          </Link>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <Link to="/" className="navbar-item is-active">
              Home
            </Link>
            <Link to="/projects" className="navbar-item">
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menubar
