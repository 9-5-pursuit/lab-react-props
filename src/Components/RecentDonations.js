import React from 'react'

const RecentDonations = (props) => {
  return (
    <div>
      <h3>Recent Donations</h3>
      {
        props.donations.map((item, i) => {
          return <div>
            <p><span style={{ color: 'green' }}>{item.name} donated ${item.amount}</span><br />
              {item.caption}
            </p>
          </div>
        })
      }
    </div>
  )
}

export default RecentDonations
