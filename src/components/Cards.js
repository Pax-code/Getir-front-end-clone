import React, { useState, useEffect } from "react";
import cardsData from "../api/cards.json";

function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-x-4 mt-8">
      {cards.length &&
        cards.map((card) => (
          <div
            key={card.id}
            className="bg-white p-14 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <img className="w-36 h-36 mb-6" src={card.image} />
            <h6 className="text-primary-brand-color font-semibold text-lg ">
              {card.title}
            </h6>
            <p className="mt-2 text-sm text-gray-700">{card.description}</p>
          </div>
        ))}
    </div>
  );
}

export default Cards;
