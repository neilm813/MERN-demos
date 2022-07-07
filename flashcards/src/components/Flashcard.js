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
        <p>{props.card.back}</p>
      ) : (
        <p>{props.card.front}</p>
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
