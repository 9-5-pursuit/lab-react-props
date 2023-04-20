import React from "react";

function RecentDonations(props) {
  const { donations } = props;

  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map(({ name, amount, caption, id }) => (
          <li key={id}>
            <span>
              {name} donated ${amount}
            </span>
            {caption}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RecentDonations;
