import React from "react";
import "./DonationForm.css";

function DonationForm() {
  return (
    <div>
      <form className="donationForm">
        <label>Name</label>
        <input type="text" placeholder="Your name..."></input>
        <label>Caption</label>
        <input type="text" placeholder="Add a brief message..."></input>
        <label>Amount</label>
        <input type="number" placeholder="0"></input>
        <button className="submitBtn">Donate!</button>
      </form>
    </div>
  );
}

export default DonationForm;

// export default function DonationForm() {
//   return null;
// }
