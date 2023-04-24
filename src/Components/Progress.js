import React from "react";

const Progress = ({ targetAmount, donations }) => {
  
  const raisedAmount = donations.reduce((acc, { amount }) => acc += amount , 0)
  // console.log(raisedAmount)

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${raisedAmount}{" "}</span>of{" "}
        <span className="secondary">${targetAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;
