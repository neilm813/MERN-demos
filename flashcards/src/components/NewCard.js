import { useState } from 'react';

export const NewCard = (props) => {
  // Form state:
  const [category, setCategory] = useState('');
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  const handleNewCardSubmit = (event) => {
    event.preventDefault();

    const newCard = {
      // long-form - key: value
      category: category,
      front: front,
      // shorthand can be used when the var name matches key name.
      back,
      flipped: false,
    };

    props.addNewFlashcard(newCard);

    setCategory('');
    setFront('');
    setBack('');
  };

  return (
    <form
      onSubmit={(e) => {
        handleNewCardSubmit(e);
      }}
    >
      <div>
        <label>Category: </label>
        <input
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          type="text"
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
  );
};
