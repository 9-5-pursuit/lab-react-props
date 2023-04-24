import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

function RecentDonations({ props }) {
  return (
    <div>
      <h2>Recent Donations</h2>
      <ul>
        {props.map(({ name, amount, caption }) => {
          return (
            <li>
              <span
                style={{
                  textAlign: "center",
                  color: "rgb(9, 130, 122)",
                  fontWeight: "bold",
                }}
              >
                {name} donated ${amount}
              </span>
              {caption}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecentDonations;
