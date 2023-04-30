import React from "react";
import "./Progress.css";

function Progress({ target, data }) {
  //get data amount
  let donoPosition = data.length + 1;
  //console.log(donoPosition);
  //get donation length -1 (last index of array)

  function accumulateAmount(data) {
    let total = 0;

    data.forEach((element) => {
      const eleAmount = element.amount;
      total += eleAmount;
    });

    return total;
  }

  return (
    <div>
      <h2>
        Raised <span>${accumulateAmount(data)}</span> of <span>${target}</span>
      </h2>
      <h4>
        You could be donation <span>#{donoPosition}</span> !
      </h4>
    </div>
  );
}

export default Progress;

// export default function Progress() {
//   return null;
// }
