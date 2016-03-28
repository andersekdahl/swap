import React from 'react';
import ProductList from './Products/List';
import MiniCart from './ShoppingCart/MiniCart';
import ProductType from './Products/Models/Product.type';
import CartType from './ShoppingCart/Models/Cart.type';
import CartProductRequest from './ShoppingCart/Models/CartProductRequest.type';
const logotype = require('./Shared/logotype.svg');
const styles = require('./app.scss');

type PropType = {
}

type StateType = {
  products?: ProductType[];
  cart?: CartType;
  isMiniCartOpen?: boolean;
}

export default class App extends React.Component<PropType, StateType> {
  constructor(props: PropType) {
    super(props);

    this.state = {
      products: [],
      cart: {items: [], id: '', total: 0},
      isMiniCartOpen: false,
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
  toggleMiniCart() {
    this.setState({isMiniCartOpen: !this.state.isMiniCartOpen});
  }
  render() {
    return (
      <div className={styles.layout}>
        <main className={styles.main}>
          <ProductList
            products={this.state.products}
            addToCart={product => this.addToCart(product)}
          />
        </main>
        <header className={styles.header}>
          <a href="/" className={styles.logotype}>
            <img src={logotype} />
          </a>
          <div className={styles.minicart}>
            <button type="button" onClick={() => this.toggleMiniCart()} className={styles.toggler}></button>
            {this.state.isMiniCartOpen && (
              <MiniCart
                cart={this.state.cart}
                increaseQuantity={item => this.increaseQuantity(item.product)}
                decreaseQuantity={item => this.decreaseQuantity(item.product)}
              />
            )}
          </div>
        </header>
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
