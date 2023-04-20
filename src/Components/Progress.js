import React from "react";

function Progress({ money, total}) {
  return (
    <div>
      <h2>`Raised ${money} of ${total}`</h2>
    </div>
  );
};

export default Progress;
