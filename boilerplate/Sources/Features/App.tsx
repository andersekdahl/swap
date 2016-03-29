const logotype = require('./Shared/logotype.svg');
const appStyles = require('./app.scss');
const minicartStyles = require('./mini-cart.scss');
const listStyles = require('./list.scss');

export default () => (
  <div className={appStyles.layout}>
    <main className={appStyles.main}>
      <ul className={listStyles.base}>
        <li className={listStyles.item}>
          <div className={listStyles.media}>
            <img />
          </div>
          <span className={listStyles.description}></span>
          <span className={listStyles.category}></span>
          <span className={listStyles.price}></span>
          <button className={listStyles.addtocart}></button>
        </li>
      </ul>
    </main>
    <header className={appStyles.header}>
      <a href="/" className={appStyles.logotype}>
        <img src={logotype} />
      </a>
      <div className={appStyles.minicart}>
        <button type="button" className={appStyles.toggler}></button>
        <div className={minicartStyles.base}>
          <ul className={minicartStyles.items}>
              <li className={minicartStyles.item}>
                <span className={minicartStyles.description}></span>
                <button className={minicartStyles.decrease}>-</button>
                <span className={minicartStyles.quantity}></span>
                <button className={minicartStyles.increase}>+</button>
              </li>
          </ul>
          <span className={minicartStyles.total}></span>
        </div>
      </div>
    </header>
  </div>
);

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