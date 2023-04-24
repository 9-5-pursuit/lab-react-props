import React from "react";

const DonationForm = ({ props }) => {
  const length = props.length;

  return (
    <div className="donation">
      <h3>
        You could be donation{" "}
        <span className="increased" style={{ color: "palevioletred" }}>
          #{length + 1}!
        </span>
      </h3>
      <form>
        <label className="Name">
          Name <br />
          <input name="name" id="name" type="text" placeholder="Your Name..." />
        </label>
        <br />
        <br />
        <label className="Caption">
          Caption
          <br />
          <input
            name="caption"
            id="caption"
            type="text"
            placeholder="Add a brief message..."
          />
        </label>
        <br />
        <br />
        <label className="Amount">
          Amount
          <br />
          <input name="amount" id="amount" type="number" placeholder="0" />
        </label>
        <br />
        <br />
        <button>Donate!</button>
      </form>
    </div>
  );
};

export default DonationForm;
