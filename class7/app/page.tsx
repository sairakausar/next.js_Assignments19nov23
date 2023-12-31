// pages/index.js
import React from "react";
import Card from "./CardBox";
// Adjust the path based on your project structure

const Home = () => {
  const cards = [
    { title: "Card 1", content: "Content for Card 1" },
    { title: "Card 2", content: "Content for Card 2" },
    { title: "Card 3", content: "Content for Card 3" },
    { title: "Card 4", content: "Content for Card 4" },
    { title: "Card 5", content: "Content for Card 5" },
    { title: "Card 6", content: "Content for Card 6" },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default Home;
