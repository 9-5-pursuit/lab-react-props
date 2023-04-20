export default function Progress(props) { 
  const { donations, targetAmount } = props;

  let totalDonations = 0;

  let placeholder = donations.map((donation) => {
    totalDonations += donation.amount
  })
  return (
  <section className="progress">
    <h2>
    Raised <span className="secondary">${totalDonations}</span> of
    <span className="secondary"> ${targetAmount}</span>
    </h2>
  </section>
  )
}
