import Input from '../../../components/Input/Input';
import styles from './color.module.css';
function Color({ handleChange }) {
  return (
    <div className={styles.container}>
      <h3>Color</h3>

      <div className={styles.labelWrapper}>
        <Input handleChange={handleChange} value="all" title="ALL" name="test1"  />
        <Input handleChange={handleChange} value="black" title="Black" name="test1" color="black" />
        <Input handleChange={handleChange} value="blue" title="Blue" name="test1" color="blue" />
        <Input handleChange={handleChange} value="red" title="Red" name="test1" color="red" />
        <Input handleChange={handleChange} value="green" title="Green" name="test1" color="green" />
        <Input handleChange={handleChange} value="white" title="White" name="test1" color="white" />
      </div>
    </div>
  );
}

export default Color;
