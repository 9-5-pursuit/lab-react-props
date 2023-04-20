import React from 'react'

const DonationForm = ({ num, updateArrayState }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    updateArrayState(num, {
      amount: +e.target.elements.amount.value,
      caption: e.target.elements.caption.value,
      id: num.length + 1,
      name: e.target.elements.name.value == "" ? "anon" : e.target.elements.name.value
    })
  }

  return (
    <>
      <h3>You could be donation <span className="secondary">#{num.length + 1}!</span></h3>
      <form onSubmit={handleSubmit}>
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
          style={{ marginBottom: "1em" }} required />
        <button style={{ width: 'min-content', display: "block", backgroundColor: "seagreen" }} type="submit">Donate!</button>
      </form>
    </>
  )
}

export default DonationForm
