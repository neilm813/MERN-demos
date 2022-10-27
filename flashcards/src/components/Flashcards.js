import { useState } from 'react';

import flashcardsData from '../data/flashcards.json';
import { OneFlashcard } from './OneFlashcard';
import { NewCard } from './NewCard';

export const Flashcards = () => {
  const [flashcards, setFlashcards] = useState(flashcardsData);

  const handleFlipCardClick = (event, selectedIdx) => {
    const updatedFlashcards = flashcards.map((card, i) => {
      if (i === selectedIdx) {
        card.flipped = !card.flipped;
      }
      return card;
    });

    setFlashcards(updatedFlashcards);
  };

  const handleDeleteClick = (event, idxToRemove) => {
    event.stopPropagation();

    const filteredFlashcards = flashcards.filter((card, i) => {
      return idxToRemove !== i;
    });

    setFlashcards(filteredFlashcards);
  };

  const addNewFlashcard = (newCard) => {
    // Spread all the current flashcards into a new array, and then add the 1 new card.
    const updatedCards = [newCard, ...flashcards];
    setFlashcards(updatedCards);
  };

  return (
    <div>
      <NewCard addNewFlashcard={addNewFlashcard} />
      <hr />
      <div className="flex-row flex-wrap">
        {flashcards.map((card, idx) => {
          return (
            <OneFlashcard
              key={idx}
              handleFlipCardClick={handleFlipCardClick}
              handleDeleteClick={handleDeleteClick}
              idx={idx}
              card={card}
            />
          );
        })}
      </div>
    </div>
  );
};
