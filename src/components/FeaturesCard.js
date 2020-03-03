import React from 'react'
import Truncate from 'react-truncate'

const FeaturesCard = ({ title, image, alt, description }) => {
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
          <p>
            <Truncate lines={4}>{description}</Truncate>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeaturesCard
