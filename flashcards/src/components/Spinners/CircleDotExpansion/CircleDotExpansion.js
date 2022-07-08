import styles from './styles.module.css';

export const CircleDotExpansion = ({ loading = true, color = '#ffffff' }) => {
  if (!loading) {
    return null;
  }

  return <div className={styles.loader} style={{ color: color }}></div>;
};
