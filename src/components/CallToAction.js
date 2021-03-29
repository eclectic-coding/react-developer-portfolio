import React from 'react'

const CallToAction = () => {
  return (
    <div className="box cta">
      <p className="has-text-centered">
        <a
          href="https://docs.google.com/document/d/1VNo4IPdI4AK2PSudLcwb5Mv01qsw6sa9H7ZILhzs1tY/edit"
          target="_blank"
        >
          <span className="tag is-primary">Resume</span>
        </a>{' '}
        Download my last resume.
      </p>
    </div>
  )
}

export default CallToAction
