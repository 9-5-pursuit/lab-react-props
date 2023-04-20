function RecentDonations({ name, amount, caption }) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        <li>
          <span>
            {name} donated ${amount}
          </span>
          {caption}
        </li>
        <li>
          <span>
            {name} donated ${amount}
          </span>
          {caption}
        </li>
      </ul>
    </section>
  );
}

export default RecentDonations;