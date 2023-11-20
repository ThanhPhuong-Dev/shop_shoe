import { BsCart4 } from 'react-icons/bs';

import Category from './Category/category';
import Color from './Color/color';
import Price from './Price/price';
import styles from './sidebar.module.css';

function SideBar({ handleChange }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <BsCart4></BsCart4>
      </div>
      <div className={styles.body}>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Color handleChange={handleChange} />
      </div>
    </div>
  );
}

export default SideBar;
