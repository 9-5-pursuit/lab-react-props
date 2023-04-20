import React from 'react'

const DonationForm = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
  <h3>You could be donation <span class="secondary" style={{color: 'red'}}>#{props}!</span></h3>
  <form>
    <label htmlFor="name"
      >Name<input
        id="name"
        name="name"
        type="text"
        placeholder="Your name..." /></label
    ><label htmlFor="caption"
      >Caption<input
        id="caption"
        name="caption"
        type="text"
        placeholder="Add a brief message..." /></label
    ><label htmlFor="amount"
      >Amount<input
        id="amount"
        name="amount"
        type="number"
        placeholder="0" /></label
    ><button>Donate!</button>
  </form>
    </>
  )
}

export default DonationForm
