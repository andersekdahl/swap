import CartItem from './CartItem.type';

type Cart = {
  id: string;
  items: CartItem[];
  total: number;
}

export default Cart;
