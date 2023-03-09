import './App.css';
import flashcardsData from './data/flashcards.json';
import { useState } from 'react';

function App() {
  /* 
  Array destructuring is shorthand for giving a var name to indexed items:
  const flashcardsStatePair = useState(flashcardsData);
  const flashcards = flashcardsStatePair[0];
  const setFlashcards = flashcardsStatePair[1];
  */
  const [flashcards, setFlashcards] = useState(flashcardsData);

  const handleCardClick = (selectedIdx) => {
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

  return (
    <div className="container">
      <header style={{ textAlign: 'center' }}>
        <h1>Programming Flash Cards</h1>
      </header>
      <hr />

      <main className="flex-row flex-wrap">
        {flashcards.map((card, i) => {
          return (
            <section
              key={i}
              className="card"
              onClick={(event) => {
                handleCardClick(i);
              }}
            >
              <h3>{card.category}</h3>
              {card.flipped ? <p>{card.back}</p> : <p>{card.front}</p>}
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default App;
