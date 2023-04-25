export default function Progress({ targetAmount, donations }) {
  const raisedMoney = donations.reduce((total, {amount}) => {
    return total += amount
  }, 0);
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${raisedMoney}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
}
