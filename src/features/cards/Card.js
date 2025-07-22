import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCardById } from "./cardsSlice";

export default function Card({ id }) {
  const card = useSelector((state) => selectCardById(state, id));
  const [flipped, setFlipped] = useState(false);

  if (!card) {
    return <p>Card not found!</p>;
  }

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
