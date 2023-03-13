import { useState } from 'react';

export const CreateCard = (props) => {
  // Form state
  const [category, setCategory] = useState('');
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  const handleNewCardSubmit = (e) => {
    e.preventDefault();

    const newCard = {
      // long-form key: value syntax.
      category: category,
      question: front,
      correct_answer: back,
      flipped: false,
    };

    props.addNewCard(newCard);

    // Reset the state data since the form is already submitted.
    // This will only clear the form if you use value={stateVar} on the <input>
    setCategory('');
    setFront('');
    setBack('');
  };

  return (
    <form
      onSubmit={(event) => {
        handleNewCardSubmit(event);
      }}
    >
      <div>
        <label>Category: </label>
        <input
          type="text"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
      </div>

      <div>
        <label>Front: </label>
        <input
          type="text"
          value={front}
          onChange={(event) => {
            setFront(event.target.value);
          }}
        />
      </div>

      <div>
        <label>Back: </label>
        <input
          type="text"
          value={back}
          onChange={(event) => {
            setBack(event.target.value);
          }}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};
