import React from "react";

function Progress(props) {
  const { donations, targetAmount } = props;
  const total = donations.reduce(
    (total, donation) => total + donation.amount,
    0
  );

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${total}</span> of{" "}
        <span className="secondary">${targetAmount}</span>
      </h2>
    </section>
  );
}

export default Progress;
