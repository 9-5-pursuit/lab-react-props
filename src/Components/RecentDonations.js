const RecentDonations = (props) => {
  const { donations } = props;
  // console.log(props);
  let info = donations.map((donation) => {
    return (
      <li>
        <span>
          {donation.name} donated ${donation.amount}
        </span>
        {donation.caption}
      </li>
    );
  });
  // console.log(donations);

  return (
    <span>
      <h2>Recent donations</h2>
      <ul>{info}</ul>
    </span>
  );
};
export default RecentDonations;
