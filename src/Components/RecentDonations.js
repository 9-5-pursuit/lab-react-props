function IndividualDonation(props) {
  return (
    <li><span>{props.data.name} donated ${props.data.amount}</span>{props.data.caption}</li>
  )
}

export default function RecentDonations(props) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {props.donationData.map((donation) => {
            return (
              <IndividualDonation 
              key={donation.id}
              data={donation}
              />
            )
        })}
      </ul>
    </section>
  )
}
