export default function Progress(props) {

  const { donations, targetAmount } = props

  let amountRaised = 0;
          donations.map((element) => {
     return amountRaised += element.amount });

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${amountRaised}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
}
