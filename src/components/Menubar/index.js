import React from 'react'
import { Link } from '@reach/router'
// Components
import menuLinks from './menuLinks'
// Styling Component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const Menubar = ({ user }) => {
  return (
    <nav className="navbar bg-white">
      <div className="container">
        <div className="navbar-brand title">
          <Link to="/" className="navbar-item">
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="has-text-primary is-size-2 has-margin-right-15"
            />
            {/*<h1 className="title is-size-4 has-margin-left-20">Chuck Smith</h1>*/}
          </Link>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            {menuLinks.map(item => (
              <Link key={item.id} to={item.link} className="navbar-item">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menubar
