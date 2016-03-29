import CartType from './Models/Cart.type';
import CartItemType from './Models/CartItem.type';
const styles = require('./mini-cart.scss');

type PropType = {
  cart: CartType;
  decreaseQuantity: (item: CartItemType) => void;
  increaseQuantity: (item: CartItemType) => void;
}

export default (props: PropType) => (
  <div className={styles.base}>
    <ul className={styles.items}>
      {props.cart.items.map(item => (
        <li key={item.product.id} className={styles.item}>
          <span className={styles.description}>{item.product.shortDescription}</span>
          <button type="button" onClick={() => props.decreaseQuantity(item)} className={styles.decrease}>-</button>
          <span className={styles.quantity}>{item.quantity}</span>
          <button type="button" onClick={() => props.increaseQuantity(item)} className={styles.increase}>+</button>
        </li>
      ))}
    </ul>
    <span className={styles.total}>{props.cart.total}</span>
  </div>
);
