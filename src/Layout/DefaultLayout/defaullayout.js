import Navigation from '../Navigation/navigation';
import SideBar from '../Sidebar/sidebar';
import styles from './defautlayout.module.css';

function DefaultLayout({ children, handleChange, query, handleInputChange }) {
  return (
    <div className={styles.wrapper}>
      <SideBar handleChange={handleChange}></SideBar>
      <div className={styles.container}>
        <Navigation query={query} handleInputChange={handleInputChange}></Navigation>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
