import cardData from "./mock/data.js";
import Card from "./Card.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      {cardData.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}
