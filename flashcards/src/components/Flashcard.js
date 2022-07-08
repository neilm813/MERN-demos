export const Flashcard = (props) => {
  return (
    <section
      className="card"
      onClick={(event) => {
        props.handleFlipCardClick(props.i);
      }}
    >
      <h3>{props.card.category}</h3>
      {props.card.flipped ? (
        <p>{props.card.correct_answer}</p>
      ) : (
        <p>{props.card.question}</p>
      )}
      <div>
        <button
          onClick={(event) => {
            props.handleDeleteCardClick(event, props.i);
          }}
        >
          Delete
        </button>
      </div>
    </section>
  );
};
