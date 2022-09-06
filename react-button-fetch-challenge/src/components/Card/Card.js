import styles from './Card.module.css';

export const Card = ({ children, ...props }) => {
  console.log(children);
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
};
