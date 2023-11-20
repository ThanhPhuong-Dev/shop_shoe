import Input from '../../../components/Input/Input';
import styles from './price.module.css';

function Price({ handleChange }) {
  return (
    <div className={styles.container}>
      <h3>Price</h3>
      <div className={styles.labelWrapper}>
        <Input name="test2" title="All" value=""></Input>
        <Input handleChange={handleChange} value={50} title="$0 - 50" name="test2" />

        <Input handleChange={handleChange} value={100} title="$50 - $100" name="test2" />

        <Input handleChange={handleChange} value={150} title="$100 - $150" name="test2" />

        <Input handleChange={handleChange} value={200} title="Over $150" name="test2" />
      </div>
    </div>
  );
}

export default Price;
