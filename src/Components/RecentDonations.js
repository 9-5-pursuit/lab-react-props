export default function RecentDonations({ donations }) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map((item) => {
          return (
            <li>
              <span>
                {item.name} donated ${item.amount}
              </span>
              {item.caption}.
            </li>
          );
        })}
      </ul>
    </section>
  );
}
/*
<section>
  <h2>Recent Donations</h2>
  <ul>
    <li><span>Jo donated $25</span>You really need this. Really.</li>
    <li><span>Rami donated $10</span>Here, take a break from work!</li>
    <!-- etc... -->
  </ul>
</section>


{
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
*/
