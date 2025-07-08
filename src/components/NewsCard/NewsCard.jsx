import React from "react";
import { useState } from "react";

function NewsCard({ card, isLoggedIn, onSaveClick, onDeleteClick }) {
  const [isSaved, setIsSaved] = useState(false);
  const handleSaveClick = () => {
    if (isLoggedIn) {
      setIsSaved(!isSaved);
      onSaveClick(card);
    }
  };

  const handleDeleteClick = () => {
    onDeleteClick(card);
  };

  return (
    <li className="news__card">
      <img className="news__card-image" src={card.image} alt={card.title} />
      <div className="news__card-content">
        <p className="news__card-date">{card.date}</p>
        <h3 className="news__card-title">{card.title}</h3>
        <p className="news__card-text">{card.text}</p>
        <p className="news__card-source">{card.source}</p>
      </div>
      {isLoggedIn ? (
        <button
          className={`news__card-button ${
            isSaved ? `news__card_button-saved` : ""
          }`}
          onClick={isSaved ? handleDeleteClick : handleSaveClick}
        >
          {isSaved ? "" : `Save`}
        </button>
      ) : (
        <button className="news__card-button" onClick={handleSaveClick}>
          Save
        </button>
      )}
    </li>
  );
}

export default NewsCard;
