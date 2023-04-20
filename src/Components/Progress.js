export default function Progress(props) {
  // const {amount} = props
  // console.log(amount);

  return (
    <section className="progress">
     <h2>
     Raised <span className="secondary">$${props.amount.reduce((prev, next) => { return prev + next.props.amount }, 0)}</span> of
     <span className="secondary">$1000</span>
     </h2>
</section>
  );
}
