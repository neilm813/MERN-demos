import "./App.css";

import React, { useState } from "react";

import flashcardsData from "./flashcards.json";

function App() {
  const [flashcards, setFlashcards] = useState(flashcardsData);

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

  return (
    <div className="container">
      <header>
        <h1 style={{ textAlign: "center" }}>Programming Flash Cards</h1>
        <hr />
      </header>

      <main className="flex-row flex-wrap">
        {flashcards.map((card, i) => {
          return (
            <section
              key={i}
              className="card"
              onClick={(event) => {
                handleFlipCardClick(event, i);
              }}
            >
              <h3>{card.category}</h3>
              {card.flipped ? (
                <p className="back">{card.back}</p>
              ) : (
                <p className="front">{card.front}</p>
              )}
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default App;
