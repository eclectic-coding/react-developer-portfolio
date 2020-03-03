import React from 'react'
import Menubar from './Menubar'

const Hero = ({ location }) => {
  return (
    <section className="hero is-primary is-medium is-bold">
      <div className="hero-head">
        <Menubar location={location} />
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-size-1 is-size-4-mobile">Chuck Smith</h1>
          <h2 className="subtitle">
            Welcome to my developing portfolio site. I just finished Flatiron Bootcamp,
            and after a lifetime of learning,
            I am excited about looking for my first
            professional development role.
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero
