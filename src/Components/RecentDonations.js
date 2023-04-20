export default function RecentDonations({ donations }) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map(({ amount, caption, id, name }) => {
          return (
            <li key={id}>
              <span>
                {name} donated ${amount}
              </span>
              {caption}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
