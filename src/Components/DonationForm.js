import React from "react";

const DonationForm = ({ donations }) => {
  return (
    <section className="donation">
      <h3>
        You could be donation{" "}<span className="secondary">#{donations.length + 1}</span>!
      </h3>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Your name" />
        <label htmlFor="caption">Caption</label>
        <input
          type="text"
          name="caption"
          placeholder="Add a brief message..."
        />
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" id="amount" placeholder="0" />
        <button type="submit">Donate</button>
      </form>
    </section>
  );
};

export default DonationForm;
