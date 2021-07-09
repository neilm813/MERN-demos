import styles from "./Flashcard.module.css";

const Flashcard = (props) => {
  return (
    <fieldset
      key={props.i}
      className={styles.card}
      onClick={(event) => {
        props.handleFlipCardClick(event, props.i);
      }}
    >
      <legend>Flashcard.js</legend>
      <h3>{props.card.category}</h3>
      {props.card.flipped ? (
        <p className={`${styles.back} ${styles.colorfulFont}`}>
          {props.card.back}
        </p>
      ) : (
        <p className={styles.front}>{props.card.front}</p>
      )}
      <button
        onClick={(event) => {
          props.handleDelete(event, props.i);
        }}
        style={{ color: "red", fontWeight: "bold" }}
      >
        X
      </button>
    </fieldset>
  );
};

export default Flashcard;
