import React from 'react'

function RecentDonations(props) {
  return (
    
    <section>
      <ul>
        <li><span>{props.name} donated ${props.amount}</span>{props.comment}</li>
      
      </ul>
    </section>
  )
}

export default RecentDonations
