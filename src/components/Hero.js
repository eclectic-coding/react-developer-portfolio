import React from 'react'
import Menubar from './Menubar'
import heroImg from '../images/cup-of-coffee.jpg'

const Hero = ({ location }) => {
  if (location.pathname === '/') {
    return (
      <section className="hero is-dark is-medium hero__has-background">
        <div className="hero-head">
          <img src={heroImg} alt="" className="hero__background hero--is-transparent" />
          <Menubar location={location} />
        </div>
        {/*{location.pathname === '/' ? <div>Hello</div> : <div>D'oh</div>}*/}
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1 is-size-4-mobile">Chuck Smith</h1>
            <h2 className="subtitle has-text-white">
              Welcome to my developing portfolio site. I just finished Flatiron Bootcamp,
              <br />
              and after a lifetime of learning, I am excited about looking for my first
              professional development role.
            </h2>
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <>
        <Menubar location={location} />
      </>
    )
  }
}

export default Hero
