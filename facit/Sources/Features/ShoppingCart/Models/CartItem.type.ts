import ProductType from '../../Products/Models/Product.type';

type CartItem = {
  product: ProductType;
  quantity: number;
}

export default CartItem;
