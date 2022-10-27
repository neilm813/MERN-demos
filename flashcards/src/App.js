import { useState } from 'react';

import './App.css';
import flashcardsData from './data/flashcards.json';

function App() {
  /* 
  Array destructuring is shorthand for giving a var name to indexed items:
  const flashcardsStatePair = useState(flashcardsData);
  const flashcards = flashcardsStatePair[0];
  const setFlashcards = flashcardsStatePair[1];
  */

  // [currentState, updateStateFunction]
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

  return (
    <div className="container">
      <header style={{ textAlign: 'center' }}>
        <h1>Programming Flash Cards</h1>
      </header>
      <hr />

      <main className="flex-row flex-wrap">
        {flashcards.map((card, idx) => {
          return (
            <section
              onClick={(e) => {
                handleFlipCardClick(e, idx);
              }}
              key={idx}
              className="card"
            >
              <h3>{card.category}</h3>
              {card.flipped ? <p>{card.back}</p> : <p>{card.front}</p>}
            </section>
          );
        })}
      </main>

      {/* Conditional flip with classes */}
      {/* <main className="flex-row flex-wrap">
        {flashcards.map((card, idx) => {
          const classes = ['card'];

          if (card.flipped) {
            classes.push('flipped');
          }

          return (
            <section
              onClick={(e) => {
                handleFlipCardClick(e, idx);
              }}
              key={idx}
              className={classes.join(' ')}
            >
              <h3>{card.category}</h3>
              <p className="front">{card.front}</p>
              <p className="back">{card.back}</p>
            </section>
          );
        })}
      </main> */}
    </div>
  );
}

export default App;
