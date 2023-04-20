// import React from "react";

const Donations = (props) => {
  const { amount, caption, name } = props;

  return (
    <li>
      <span>
        {name} donated ${amount}
      </span>
      {caption}
    </li>
  );
};
// function Donations() {
//   return (
//     <div>Donations</div>
//   )
// }

export default Donations;
