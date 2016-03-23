import React from 'react';
import ProductList from './Products/List';
import MiniCart from './ShoppingCart/MiniCart';
import ProductType from './Products/Models/Product.type';
import CartType from './ShoppingCart/Models/Cart.type';
import CartProductRequest from './ShoppingCart/Models/CartProductRequest.type';

type PropType = {
}

type StateType = {
  products?: ProductType[];
  cart?: CartType;
}

export default class App extends React.Component<PropType, StateType> {
  constructor(props: PropType) {
    super(props);

    this.state = {
      products: [],
      cart: {items: [], id: '', total: 0},
    };

    get<ProductType[]>('/products').then(json => this.setState({products: json}));
    get<CartType>('/cart').then(json => this.setState({cart: json}));
  }
  addToCart(product: ProductType) {
    const request: CartProductRequest = {
      id: product.id,
    };
    post<CartType>('/cart/add', request).then(json => this.setState({cart: json}));
  }
  increaseQuantity(product: ProductType) {
    this.addToCart(product);
  }
  decreaseQuantity(product: ProductType) {
    const request: CartProductRequest = {
      id: product.id,
    };
    post<CartType>('/cart/decreasequantity', request).then(json => this.setState({cart: json}));
  }
  render() {
    return (
      <div>
        <MiniCart
          cart={this.state.cart}
          increaseQuantity={item => this.increaseQuantity(item.product)}
          decreaseQuantity={item => this.decreaseQuantity(item.product)}
        />
        <ProductList
          products={this.state.products}
          addToCart={product => this.addToCart(product)}
        />
      </div>
    );
  }
}

function get<T>(url: string) {
  return fetch(url)
    .then(r => r.json())
    .then((json: T) => {
      return json;
    });
}

function post<T>(url: string, body: any) {
  return fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json'},
  })
    .then(r => r.json())
    .then((json: T) => {
      return json;
    });
}
