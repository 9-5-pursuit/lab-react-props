const Progress = (props) => {
  const { donations, targetAmount } = props;
};

export default function Progress({ collected, targetAmount }) {
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${collected}</span> of
        <span className="secondary">${targetAmount}</span>
      </h2>
    </section>
  );
}
