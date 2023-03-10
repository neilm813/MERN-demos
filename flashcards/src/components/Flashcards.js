import { useState } from 'react';

import flashcardsData from '../data/flashcards.json';
import { CreateCard } from './CreateCard';
import { OneFlashcard } from './OneFlashcard';

export const Flashcards = (props) => {
  /* 
    Array destructuring is shorthand for giving a var name to indexed items:
    const flashcardsStatePair = useState(flashcardsData);
    const flashcards = flashcardsStatePair[0];
    const setFlashcards = flashcardsStatePair[1];
    */
  const [flashcards, setFlashcards] = useState(props.cards);

  const handleCardFlipClick = (selectedIdx) => {
    const updatedFlashcards = flashcards.map((card, i) => {
      if (selectedIdx === i) {
        card.flipped = !card.flipped;

        /* Without mutating the card object: */
        // return {
        //   ...card,
        //   flipped: !card.flipped,
        // };
      }

      return card;
    });

    setFlashcards(updatedFlashcards);
  };

  const handleCardDeleteClick = (event, delIdx) => {
    event.stopPropagation();

    const filteredFlashcards = flashcards.filter((card, i) => {
      const isCardToDelete = delIdx === i;

      if (isCardToDelete) {
        // false to remove
        return false;
      }
      // true to keep
      return true;
    });

    setFlashcards(filteredFlashcards);

    // One liner
    // setFlashcards(flashcards.filter((_, i) => delIdx !== i));
  };

  const addNewCard = (newCard) => {
    setFlashcards([newCard, ...flashcards]);
  };

  return (
    <div>
      <CreateCard addNewCard={addNewCard} />

      <div className="flex-row flex-wrap">
        {flashcards.map((card, cardIdx) => {
          return (
            <OneFlashcard
              key={cardIdx}
              card={card}
              cardIdx={cardIdx}
              handleCardFlipClick={handleCardFlipClick}
              handleCardDeleteClick={handleCardDeleteClick}
            />
          );
        })}
      </div>
    </div>
  );
};
