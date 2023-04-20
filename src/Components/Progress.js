export default function Progress({ targetAmount, donations }) {
    // reduce accumulator pattern
    const moneyRaised = donations.reduce((total, { amount }) => 
    {
      return total += amount;
    }, 0);
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${moneyRaised}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
}
