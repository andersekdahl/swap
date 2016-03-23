import CartType from './Models/Cart.type';
import CartItemType from './Models/CartItem.type';

type PropType = {
  cart: CartType;
  decreaseQuantity: (item: CartItemType) => void;
  increaseQuantity: (item: CartItemType) => void;
}

export default (props: PropType) => (
  <div>
    {props.cart.items.map(item => (
      <li key={item.product.id}>
        {item.product.shortDescription}
        {item.quantity}
        <button onClick={() => props.decreaseQuantity(item)}>-</button>
        <button onClick={() => props.increaseQuantity(item)}>+</button>
      </li>
    ))}
    {props.cart.total}
  </div>
);
