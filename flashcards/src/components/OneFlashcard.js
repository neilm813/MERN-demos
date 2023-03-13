export const OneFlashcard = (props) => {
  const { card, handleCardFlipClick, cardIdx, handleCardDeleteClick } = props;

  return (
    <section
      className="card"
      onClick={(event) => {
        handleCardFlipClick(cardIdx);
      }}
    >
      <h3>{card.category}</h3>
      {card.flipped ? <p>{card.correct_answer}</p> : <p>{card.question}</p>}
      <button
        onClick={(event) => {
          handleCardDeleteClick(event, cardIdx);
        }}
      >
        Delete
      </button>
    </section>
  );
};
