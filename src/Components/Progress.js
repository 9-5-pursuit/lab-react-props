export default function Progress({ donations }) {
  let paid = 0
  for (let i = 0; i < donations.length; i++) {
    const element = donations[i];
    paid += element.amount;
  }
  

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${paid}</span> of
        <span className="secondary">$1000</span>
      </h2>
    </section>
  );
}
/*
<section className="progress">
  <h2>
    Raised <span className="secondary">$0</span> of
    <span className="secondary">$1000</span>
  </h2>
</section>
*/
