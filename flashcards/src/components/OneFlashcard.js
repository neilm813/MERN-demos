export const OneFlashcard = (props) => {
  return (
    <section
      onClick={(e) => {
        props.handleFlipCardClick(e, props.idx);
      }}
      key={props.idx}
      className="card"
    >
      <h3>{props.card.category}</h3>
      {props.card.flipped ? (
        <p>{props.card.back}</p>
      ) : (
        <p>{props.card.front}</p>
      )}
      <button
        onClick={(e) => {
          props.handleDeleteClick(e, props.idx);
        }}
      >
        Delete
      </button>
    </section>
  );
};
