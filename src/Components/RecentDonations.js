import Donations from "./Donations";

const RecentDonations = (props) => {
  const { donations } = props;
  let output = donations.map((donation) => {
    return (
      <Donations
        amount={donation.amount}
        caption={donation.caption}
        name={donation.name}
      />
    );
  });
  return (
    <span>
      <h2>Recent Donations</h2>
      <ul>{output}</ul>
    </span>
  );
};

export default RecentDonations;
