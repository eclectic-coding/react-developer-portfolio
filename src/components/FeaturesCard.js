import React from 'react'
import experienceImg from '../images/experience.jpg'

const FeaturesCard = ({ title, image, alt }) => {
  return (
    <div className="card is-shady">
      <div className="card-image">
        <figure className="image">
          <img src={image} alt={alt} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h3>{title}</h3>
          <p>Coming soon... </p>
        </div>
      </div>
    </div>
  )
}

export default FeaturesCard
