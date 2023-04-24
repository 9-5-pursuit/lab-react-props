export default function RecentDonations(props) {
  const { amount, name, caption } = props;

  return (
    <>
      <ul>
        {" "}
        <li>
          <span>
            {name} donated ${amount}
          </span>{" "}
          {caption}
        </li>
      </ul>
    </>
  );
}
