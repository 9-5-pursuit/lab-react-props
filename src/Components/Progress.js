export default function Progress({ targetAmount, donations }) {
  //  Accumulator Pattern w/ Reduce
  const raisedMoney = donations.reduce((total, { amount }) => {
    return (total += amount);
  }, 0);
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${raisedMoney}</span> of{" "}
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
}

// const Progress = (props) => {
//   const { targetAmount, total } = props

//   return (
//     <section className="progress">
//       <h2>
//         Raised <span className="secondary">${total}</span> of{" "}
//         <span className="secondary">${targetAmount}</span>
//       </h2>
//     </section>
//   )
// };

// export default Progress;
