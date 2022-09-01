import styles from './Flashcard.module.css';

console.log(styles);

export const Flashcard = (props) => {
  const { card, handleFlipCardClick, handleDelete, idx } = props;
  const { category, back, flipped, front } = card;

  return (
    <section
      className={`${styles.card}`}
      onClick={(e) => {
        handleFlipCardClick(e, idx);
      }}
    >
      <h3>{category}</h3>
      {/* 
      condition ? 'return this if true' : 'return this if false'
      */}
      {flipped ? <p>{back}</p> : <p>{front}</p>}
      <button
        onClick={(e) => {
          handleDelete(e, idx);
        }}
      >
        Delete
      </button>
    </section>
  );
};
