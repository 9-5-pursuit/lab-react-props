import React from 'react'

const DonationForm = (props) => {

  return (
    <>
      <h3>You could be donation <span class="secondary" style={{ color: 'red' }}>#{props.num}!</span></h3>
      <form style={{}}>
        <label htmlFor="name" style={{ display: "block", marginBottom: "0.5em" }}
        >Name</label><input
          id="name"
          name="name"
          type="text"
          placeholder="Your name..."
          style={{ marginBottom: "1em" }} />
        <label htmlFor="caption" style={{ display: "block", marginBottom: "0.5em" }}>Caption</label>
        <input
          id="caption"
          name="caption"
          type="text"
          placeholder="Add a brief message..."
          style={{ marginBottom: "1em" }} />
        <label htmlFor="amount" style={{ display: "block", marginBottom: "0.5em" }}>Amount</label>
        <input
          id="amount"
          name="amount"
          type="number"
          placeholder="0"
          style={{ marginBottom: "1em" }} />
        <button style={{ width: 'min-content', display: "block", backgroundColor: "seagreen" }}>Donate!</button>
      </form>
    </>
  )
}

export default DonationForm
