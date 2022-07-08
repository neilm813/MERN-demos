// Generally people like to organize imports from 3rd party packages at the top
// then from your own files/folders below that.

import { useEffect, useState } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import { Flashcard } from './components/Flashcard';

// Importing components on one line is only possible if you add index.js files in folders.
// import { Flashcard, CircleDotExpansion } from './components';
import { CircleDotExpansion } from './components';
// import flashcardsData from './flashcards.json';

function App() {
  const [correctCount, setCorrectCount] = useState(0);
  const [flashcards, setFlashcards] = useState(null);

  // Form state
  const [category, setCategory] = useState('');
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  // If you want to console.log state to see current values
  // do it here, not after a call to setState b/c setState functions are async.

  useEffect(() => {
    console.log('useEffect fetching data!');
    axios
      .get(
        'https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=boolean'
      )
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          setFlashcards(res.data.results);
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFlipCardClick = (selectedIdx) => {
    /* 
    NEVER MUTATE STATE DIRECTLY
    when state is an array, to update state you MUST create a NEW array
    that contains the new data you want to be in state.
    */

    /* METHOD 1 */
    // const updatedFlashcards = [...flashcards];
    // This technically mutates state b/c the objects were copied by reference
    // most of the time it's ok, but best to avoid mutating.
    // const updatedCard = updatedFlashcards[i];
    // updatedCard.flipped = !updatedCard.flipped;
    // setFlashcards(updatedFlashcards);

    /* METHOD 2, don't mutate object by reference */
    // const updatedFlashcards = [...flashcards];
    // const updatedCard = { ...flashcards[i] };
    // updatedCard.flipped = !updatedCard.flipped;
    // updatedFlashcards[i] = updatedCard;
    // setFlashcards(updatedFlashcards);

    /* Method 3: use map and spread to avoid mutating by reference */
    const updatedFlashcards = flashcards.map((card, i) => {
      if (i === selectedIdx) {
        return {
          ...card,
          // reverse the flipped state
          flipped: !card.flipped,
        };
      }
      return card;
    });
    setFlashcards(updatedFlashcards);
  };

  const handleNewCardSubmit = (e) => {
    // Prevent the default form submit page refresh.
    e.preventDefault();
    const newFlashcard = {
      front: front,
      back: back,
      // shorthand can be used when key name matches var-containing-value
      category,
    };

    // Remove form data after retrieving it.
    setCategory('');
    setFront('');
    setBack('');

    console.log('new flashcard:', newFlashcard);
    setFlashcards([newFlashcard, ...flashcards]);
  };

  const handleDeleteCardClick = (event, delIdx) => {
    // Prevent the flip click from taking over, aka event-bubbling.
    event.stopPropagation();
    const updatedFlashcards = flashcards.filter((card, i) => {
      // return true to keep it, false to remove it.
      // When delIdx is not i, we want this to be true
      return delIdx !== i;
    });

    setFlashcards(updatedFlashcards);
  };

  console.log('App.js is rendering!');
  return (
    <div style={{ width: '85%', margin: '0 auto' }}>
      <header style={{ textAlign: 'center' }}>
        <h1>Programming FLash Cards</h1>
        <button
          onClick={() => {
            setCorrectCount(correctCount + 1);
          }}
        >
          Count: {correctCount}
        </button>
        <hr />

        <form
          onSubmit={(event) => {
            handleNewCardSubmit(event);
          }}
        >
          <div>
            <label>Category: </label>
            <input
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              type="text"
              // two way data binding
              // 1. form updates our state
              // 2. updating our state updates the form.
              value={category}
            />
          </div>

          <div>
            <label>Front: </label>
            <input
              onChange={(e) => {
                setFront(e.target.value);
              }}
              type="text"
              value={front}
            />
          </div>

          <div>
            <label>Back: </label>
            <input
              onChange={(e) => {
                setBack(e.target.value);
              }}
              type="text"
              value={back}
            />
          </div>
          <button>Add</button>
        </form>
        <hr />
      </header>

      <main className="flex-row flex-wrap">
        {flashcards !== null && flashcards.length === 0 && (
          <p>API found no questions!</p>
        )}

        <CircleDotExpansion loading={flashcards === null} color={'red'} />

        {flashcards !== null &&
          flashcards.map((card, i) => {
            return (
              <Flashcard
                key={i}
                i={i}
                card={card}
                /* 
                Advanced bonus these functions should have been passed to
                useCallback. Because these functions are created every time
                our component is executed, they will cause this child to
                rerender b/c it detects these props have 'changed'.
                */
                handleFlipCardClick={handleFlipCardClick}
                handleDeleteCardClick={handleDeleteCardClick}
              />
            );
          })}
      </main>
    </div>
  );
}

export default App;
