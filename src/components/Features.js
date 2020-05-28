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
              description="Check out my latest design projects with links to the open source repositories. I welcome feedback and pull request. "
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
            description="Coming soon ...."
          />
        </div>
      </div>
    </section>
  )
}

export default Features
