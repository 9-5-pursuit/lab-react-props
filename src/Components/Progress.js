const Progress = (props) => {
  const { donations, targetAmount } = props;
  let sum = 0;
  donations.map((ele) => {
    sum += ele.amount;
  });
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${sum}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;
