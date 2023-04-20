import React from "react";

function Progress(props) {
  const { donations, targetAmount } = props;

  const totalDonations = donations.reduce((total, donation) => {
    return total + donation.amount;
  }, 0);

  const formattedTotalDonations = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalDonations);

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">{formattedTotalDonations}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
}

export default Progress;
