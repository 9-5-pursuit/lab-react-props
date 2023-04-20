import React from 'react'

function Progress(props) {
  return (
    <div><h3>Raised <span className='secondary'>${props.amt[1].reduce((prev, next) => { return prev + next.amount }, 0)}</span> of <span className='secondary'>${props.amt[0]}</span></h3></div>
  )
}

export default Progress
