import React from "react";
import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";
import DonationForm from "./Components/DonationForm";
import "./App.css";

const targetAmount = 1000;
const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];

function App() {
  let raised = 0;
  let donorNum = 0;
  donations.map((item) => {
    raised += item.amount;
    donorNum = donations.length + 1;
  });

  console.log(raised);
  console.log(donorNum);
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">
          <h2>Recent Donations</h2>

          {donations.map((item) => {
            return (
              <RecentDonations
                key={item.id}
                name={item.name}
                amount={item.amount}
                caption={item.caption}
              />
            );
          })}
        </section>
        <section className="progress">
          <Progress target={targetAmount} raised={raised} />

          <DonationForm number={donorNum} />
        </section>
      </main>
    </>
  );
}

export default App;
