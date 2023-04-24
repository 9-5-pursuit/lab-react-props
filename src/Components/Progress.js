export default function Progress(prop) {
  const { target, donations } = prop;
  console.log(prop);
  console.log(donations);
  const ronda = donations.reduce((sum, i) => {
    return sum + i.amount;
  }, 0);
  console.log(ronda);
  return (
    <>
      <h2>
        Raised <span className="secondary">${ronda}</span> of{" "}
        <span className="secondary">${target}</span>
      </h2>
    </>
  );
}
