export default function Progress({targetAmount, donations}) {
  const moneyEarned = donations.reduce((total, {amount}) => {
    return total += amount
  })
  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary">{moneyEarned}</span> of
    <span className="secondary">{targetAmount}</span>
  </h2>
</section>
  )
}
