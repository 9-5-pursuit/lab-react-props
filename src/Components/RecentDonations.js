import React from "react";
import "./RecentDonations.css";

function RecentDonations({ amount, caption, id, name }) {
  return (
    <>
      <p className="donoDetails">
        {name} donated ${amount}
      </p>
      <p className="message">{caption}</p>
    </>
  );
}

export default RecentDonations;

// export default function RecentDonations() {
//   return null;
// }
