import React from 'react'

const RecentDonations = ({ donations }) => {
  return (
    <section>
      <h2>Recent Donations</h2>
         {
           donations.map(({ amount, name, caption, id }) => (
            <ul key={id}>
              <li>{name} donated <span>${amount}</span></li>
              <li>{caption}</li>
            </ul>
           ))
         }
    </section>
  )
}

export default RecentDonations
