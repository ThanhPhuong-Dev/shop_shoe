import styles from './recommended.module.css';
import Button from '../components/Buttons/button';

function Recommended({ handleClick }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Recommended</h2>
      <div className={styles.action}>
        <Button onClickHandler={handleClick} value="" title="All Products" />
        <Button onClickHandler={handleClick} value="Nike" title="Nike" />
        <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Button onClickHandler={handleClick} value="Puma" title="Puma" />
        <Button onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  );
}

export default Recommended;
