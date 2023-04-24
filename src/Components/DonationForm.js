export default function DonationForm() {
  return (
    <>
      <h3>
        You could be donation <span className="secondary">#1</span>
      </h3>
      <form className="donation">
        <label htmlFor="name">
          Name
          <input id="name" name="name" type="text" placeholder="Your name..." />
        </label>
        <label htmlFor="caption">
          Caption
          <input
            id="caption"
            name="caption"
            type="text"
            placeholder="Add a brief message..."
          />{" "}
        </label>
        <label htmlFor="amount">
          Amount
          <input id="amount" name="amount" type="number" placeholder="0" />{" "}
        </label>

        <button>Donate!</button>
      </form>
    </>
  );
}
