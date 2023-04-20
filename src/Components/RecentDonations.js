export default function RecentDonations(props) {
  const { donations } = props;

let placeholder = donations.map(donation => {
  return (
    <li key={donation.id}><span>{donation.name} donated ${donation.amount}</span>{donation.caption}</li>
    )
})

  return (
  <section>
    <h2>Recent Donations</h2>
    <ul>
    {placeholder}
    </ul>
  </section>
  )
}
