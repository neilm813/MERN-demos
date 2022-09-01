import { useState } from 'react';

export const AddFlashcardForm = (props) => {
  const { addNewFlashcard } = props;

  // Form state:
  const [category, setCategory] = useState('');
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFlashcard = {
      // long-form - key: value
      category: category,
      flipped: false,
      // shorthand when key name matches var name
      front,
      back,
    };

    addNewFlashcard(newFlashcard);

    // Clear form state.
    setCategory('');
    setFront('');
    setBack('');
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <h3>New Flashcard</h3>

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
