import React from 'react'

function Progress(props) {
  return (
    <div><h3>Raised <span style={{ color: 'red' }}>${props.amt[1].reduce((prev, next) => { return prev + next.amount }, 0)}</span> of <span style={{ color: 'red' }}>${props.amt[0]}</span></h3></div>
  )
}

export default Progress
