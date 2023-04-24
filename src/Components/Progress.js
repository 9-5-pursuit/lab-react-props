import React from "react";

const Progress = ({ props, total }) => {
  const moneyRaised = props.reduce((acc, { amount }) => {
    return acc + amount;
  }, 0);

  return (
    <div className="Progress">
      <h2>
        Raised{" "}
        <span className="increased" style={{ color: "palevioletred" }}>
          ${moneyRaised}
        </span>{" "}
        of{" "}
        <span className="increased" style={{ color: "palevioletred" }}>
          ${total}
        </span>
      </h2>
    </div>
  );
};

export default Progress;
