import React from 'react'

function Progress(props) {
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${props.totalRaised}</span> of
        <span className="secondary"> ${props.intendedAmount}</span>
      </h2>
    </section>
  )
}

export default Progress
