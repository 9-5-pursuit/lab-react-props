const RecentDonations = (props) => {
  const { amount, caption, id, name } = props;
  const listDonations = donations.map((donation) => (
    <li key={donation.id}>{donation.content}</li>
  ));
  return (
    <ul className="recentDonations">
      <h2>Recent Donations</h2>
      <li>
        <span>
          {name} donated ${amount}
        </span>
        {caption}
      </li>
    </ul>
  );
};

export default RecentDonations;
