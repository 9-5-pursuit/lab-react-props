
export default function DonationForm(props) {

  const {arrayLenghtAndOne} = props

  return (
    
    
    <section className="donation">
      <h3>You could be donation <span class="secondary">#{arrayLenghtAndOne}!</span></h3>

  
  <form>
    <label htmlFor="name">Name</label>
    <input id="name" name="name" type="text" placeholder="Your Name..."></input>

    <label htmlFor="caption">Caption</label>
    <input id="caption" name="caption" type="text" placeholder="Add a brief message..."></input>

    <label htmlFor="amount">Amount</label>
    <input id="amount" name="amount" type="number" placeholder="0"></input>
    <button>Donate!</button>s
  </form>
</section>
    
  );
}
