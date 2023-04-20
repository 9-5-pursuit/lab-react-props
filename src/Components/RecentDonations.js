import React from "react";

function RecentDonations({ name, amount, caption }) {
  return (
    <ul>
      <li>
        `${name} donated ${amount} ${caption}``
      </li>
    </ul>

  );
};

export default RecentDonations;
