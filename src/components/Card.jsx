import React from "react";
import "./card.css";

function Card({ result, index, highlightedIndex }) {
  return (
    <div className={`Card ${index === highlightedIndex ? "highlight" : ""}`}>
      <div className='Card__title'>{result.id}</div>
      <div className='Card__body'>{result.name}</div>
      <div className='Card__body'>{result.items}</div>
      <div className='Card__body'>{result.address}</div>
      <div className='Card__body'>{result.pincode}</div>
    </div>
  );
}

export default Card;
