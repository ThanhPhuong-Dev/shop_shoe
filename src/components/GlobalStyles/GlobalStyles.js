import styles from './GlobalStyles.css';

function GlobalStyles({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default GlobalStyles;
