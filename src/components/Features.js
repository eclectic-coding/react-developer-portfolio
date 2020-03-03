import React from 'react'
import { Link } from '@reach/router'

import projectImg from '../images/projects.jpg'
import educationImg from '../images/education.jpg'
import experienceImg from '../images/experience.jpg'
import FeaturesCard from './FeaturesCard'

const Features = props => {
  return (
    <section className="container">
      <div className="columns features has-padding-top-40 has-padding-bottom-40">
        <div className="column is-4">
          <Link to="/projects">
            <FeaturesCard
              title="Projects"
              image={projectImg}
              alt="Project image."
              description="Come checkout my latest projects."
            />
          </Link>
        </div>
        <div className="column is-4">
          <a href="https://gitconnected.com/eclectic-coding/resume" target="_blank">
            <FeaturesCard
              title="Experience"
              image={experienceImg}
              alt="Check out my experience."
              description="Coming soon..."
            />
          </a>
        </div>
        <div className="column is-4">
          <FeaturesCard
            title="Education"
            image={educationImg}
            alt="Training and experience."
            description="Come checkout my latest projects."
          />
        </div>
      </div>
    </section>
  )
}

export default Features
