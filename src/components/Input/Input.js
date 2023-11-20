import styles from './Input.module.css'
function Input({ handleChange, value, title, name, color }) {
  return (
    <label className={styles.label}>
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className={styles.checkmark} style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
}
 
export default Input;
