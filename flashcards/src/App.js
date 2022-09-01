import logo from './logo.svg';
import './App.css';

/* 
instead of importing all of react:
import { only, what, we, need } from "react"

useState is a hook (just a function)
it helps our functional component 'hook' into more react functionality

Comparatively, class components inherit some functionality as methods.
*/
import { useState } from 'react';

import flashcardsData from './data/flashcards.json';

function App() {
  // Array destructuring is shorthand for giving a var name to indexed items:
  /* 
  const flashcardsStatePair = useState(flashcardsData);
  const flashcards = flashcardsStatePair[0];
  const setFlashcards = flashcardsStatePair[1];
 */

  const [flashcards, setFlashcards] = useState(flashcardsData);

  // set state functions are async, if you ever need to log the current state
  // log it here, not right after a set state call.

  const handleFlipCardClick = (event, selectedIdx) => {
    const updatedFlashcards = flashcards.map((card, i) => {
      if (selectedIdx === i) {
        card.flipped = !card.flipped;
        return card;
      }

      return card;
    });

    // If you don't pass in a new array, react won't re-render, that's why we
    // can't just `.push` / mutate.
    setFlashcards(updatedFlashcards);
  };

  return (
    <div className="container">
      <header style={{ textAlign: 'center' }}>
        <h1>Programming Flash Cards</h1>
        <hr />
      </header>

      <main className="flex-row flex-wrap">
        {flashcards.map((card, i) => {
          const { category, back, flipped, front } = card;
          // key should be an id if available instead of an index.
          return (
            <section
              key={i}
              className="card"
              onClick={(e) => {
                handleFlipCardClick(e, i);
              }}
            >
              <h3>{category}</h3>
              {/* 
              condition ? 'return this if true' : 'return this if false'
              */}
              {flipped ? <p>{back}</p> : <p>{front}</p>}
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default App;
