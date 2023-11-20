import Product from './Product/product';
import styles from './containerProduct.module.css';
function ContainerProduct({ result }) {
  return (
    <div className={styles.container}>
      {result.map((data, index) => (
        <Product data={data} key={index}></Product>
      ))}
    </div>
  );
}

export default ContainerProduct;
