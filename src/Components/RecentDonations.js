import React from 'react'

const RecentDonations = (props) => {
  return (
    <div>
      <h3>Recent Donations</h3>
      <ul>
      {
        props.donations.map((item, i) => {
          return <li key={i}>
            <span>{item.name} donated ${item.amount}</span>
              {item.caption}
          </li>
        })
      }
      </ul>
    </div>
  )
}

export default RecentDonations
