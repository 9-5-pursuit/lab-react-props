export default function RecentDonations({ amount, caption, name }) {
  return (
    <div className="recent-donations">
      <div className="recent-donations-data">
        <ul>
          <li>
            <span>
              {name} donated ${amount}
            </span>
            {caption}
          </li>
        </ul>
      </div>
    </div>
  );
}
