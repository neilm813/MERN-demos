import "./App.css";

import React, { useState } from "react";

import flashcardsData from "./flashcards.json";
import FormResults from "./components/FormResults";
import Flashcard from "./components/Flashcard";

function App() {
  const [flashcards, setFlashcards] = useState(flashcardsData);

  const [category, setCategory] = useState("");
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  /* This is what we would have to do if we didn't use .map to display cards. */
  // const convertCardsToJSX = () => {
  //   const cardsJSX = [];

  //   for (let i = 0; i < flashcardsData.length; i++) {
  //     const card = flashcardsData[i];
  //     cardsJSX.push(
  //       <section key={i} className="card">
  //         <h3>{card.category}</h3>
  //         <p className="front">{card.front}</p>
  //         <p className="back">{card.back}</p>
  //       </section>
  //     );
  //   }
  //   return cardsJSX;
  // };

  const handleFlipCardClick = (event, idx) => {
    // console.log(event.target);
    // When state is an array or object, when updating it, we MUST provide a
    // brand new array or object with the updated data.

    const updatedFlashcards = flashcards.map((card, i) => {
      if (i === idx) {
        card.flipped = !card.flipped;
      }
      return card;
    });

    setFlashcards(updatedFlashcards);
  };

  const handleSubmit = (event) => {
    // Prevent the default page refresh form behavior.
    event.preventDefault();

    const newFlashcard = {
      // long-form key: value pair.
      category: category,
      // shorthand can be used when the key name matches the var name.
      front,
      back,
      flipped: false,
    };

    /* one way of doing it */
    // const updatedFlashcards = flashcards.slice();
    // updatedFlashcards.push(newFlashcard);
    // setFlashcards(updatedFlashcards);

    // we MUST pass in a new array in order for react to re-render.
    setFlashcards([...flashcards, newFlashcard]);
    setCategory("");
    setFront("");
    setBack("");
  };

  const handleDelete = (event, delIdx) => {
    event.stopPropagation();
    const filteredFlashcards = flashcards.filter((card, i) => {
      return delIdx !== i;
    });

    setFlashcards(filteredFlashcards);
  };

  return (
    // fieldset and legend used just for visualization purposes not because they are supposed to be used here.
    <fieldset className="container" style={{ border: "2px solid red" }}>
      <legend>App.js</legend>
      <header>
        <h1 style={{ textAlign: "center" }}>Programming Flash Cards</h1>
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <div>
            <label>Category: </label>
            <input
              onChange={(event) => {
                setCategory(event.target.value);
              }}
              type="text"
              value={category}
            />
          </div>
          <div>
            <label>Front: </label>
            <textarea
              onChange={(event) => {
                setFront(event.target.value);
              }}
              type="text"
              value={front}
            ></textarea>
          </div>
          <div>
            <label>Back: </label>
            <textarea
              onChange={(event) => {
                setBack(event.target.value);
              }}
              type="text"
              value={back}
            ></textarea>
          </div>
          <button>Add</button>
        </form>
        <FormResults category={category} front={front} back={back} />
        <hr />
      </header>

      <main className="flex-row flex-wrap">
        {flashcards.map((card, i) => {
          return (
            <Flashcard
              key={i}
              i={i}
              handleFlipCardClick={handleFlipCardClick}
              card={card}
              handleDelete={handleDelete}
            />
          );
        })}
      </main>
    </fieldset>
  );
}

export default App;
