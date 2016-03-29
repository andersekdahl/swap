import ProductType from './Models/Product.type';
const styles = require('./list.scss');

type PropType = {
  products: ProductType[];
  addToCart: (product: ProductType) => void;
}

export default (props: PropType) => (
  <ul className={styles.base}>
    {props.products.map(product => (
      <li key={product.id} className={styles.item}>
        <div className={styles.media}>
          <img src={product.imageUrl} />
        </div>
        <span className={styles.description}>{product.shortDescription}</span>
        <span className={styles.price}>{product.price}</span>
        <span className={styles.category}>{product.category}</span>
        <button onClick={() => props.addToCart(product)} className={styles.addtocart}>Lägg i kundkorg</button>
      </li>
    ))}
  </ul>
);
