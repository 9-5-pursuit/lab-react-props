export default function Progress({ donations, targetAmount }) {
  let sum = 0;
  for (let i = 0; i < donations.length; i++) {
    sum += donations[i].amount;
  }
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${sum}</span> of{" "}
        <span className="secondary">${targetAmount}</span>
      </h2>
    </section>
  );
}
