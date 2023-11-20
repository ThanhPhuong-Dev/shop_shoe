import styles from './product.module.css';
import { CiStar } from 'react-icons/ci';
import { IoBag } from 'react-icons/io5';
function Product({ data }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={data.img} alt={data.category}></img>
      </div>
      <h2 className={styles.name}>{data.title}</h2>
      <div className={styles.review}>
        <CiStar></CiStar>
        <CiStar></CiStar>
        <CiStar></CiStar>
        <CiStar></CiStar>
        <CiStar></CiStar>
        <CiStar></CiStar>
        <span className={styles.totalReview}>{data.reviews}</span>
      </div>
      <div className={styles.footer}>
        <div className={styles.price}>
          <span>{data.prevPrice}</span> <span>{data.newPrice}</span>
        </div>

        <div className={styles.bag}>
          <IoBag></IoBag>
        </div>
      </div>
    </div>
  );
}
export default Product;
