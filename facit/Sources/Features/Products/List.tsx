import ProductType from './Models/Product.type';

type PropType = {
  products: ProductType[];
  addToCart: (product: ProductType) => void;
}

export default (props: PropType) => (
  <ul>
  {props.products.map(product => (
    <li key={product.id}>
      <p>{product.shortDescription}</p>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <img src={product.imageUrl} />

      <button onClick={() => props.addToCart(product)}>Lägg i kundkorg</button>
    </li>
  ))}
  </ul>
);
