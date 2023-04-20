import React from 'react'

function Progress(props) {
  return (
    <div><h3>Raised <span style={{ color: 'red' }}>$335</span> of <span style={{ color: 'red' }}>${props.amt}</span></h3></div>
  )
}

export default Progress
