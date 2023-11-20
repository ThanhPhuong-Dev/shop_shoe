import Input from '../../../components/Input/Input';
import styles from './category.module.css';

function Category({ handleChange }) {
  return (
    <div className={styles.container}>
      <h3>Category</h3>

      <div className={styles.labelWrapper}>
        <Input handleChange={handleChange} value="" name="test" title="ALL"></Input>
        <Input handleChange={handleChange} value="sneakers" title="Sneakers" name="test" />
        <Input handleChange={handleChange} value="flats" title="Flats" name="test" />
        <Input handleChange={handleChange} value="sandals" title="Sandals" name="test" />
        <Input handleChange={handleChange} value="heels" title="Heels" name="test" />
      </div>
    </div>
  );
}

export default Category;
