export default (cart: any) => (
  <div id="cart">
    <label>
      Total: {cart.total}
    </label>
    <img src="/Content/images/cart.png" alt="" class="pull-right" />
    {cart.items.length > 0 && (
      <div style="z-index: 999; position: absolute; padding: 1em; background-color: white; min-width:160px">
        <ul style="list-style: none">
        {cart.items.map(item => (
          <li data-id="@product.Id">
            <label style="display: block">{item.shortDescription}</label>
            <span>Qty:</span>
            {item.quantity}
            <div class="pull-right">
              <span style="cursor: pointer" class="increase-btn glyphicon glyphicon-plus" aria-hidden="true">
              </span>
              <span style="cursor: pointer" class="decrease-btn glyphicon glyphicon-minus" aria-hidden="true">
              </span>
            </div>
            <hr/>
          </li>
        ))}
        </ul>
        <p><a href="#" class="simpleCart_empty">Empty Cart</a></p>
      </div>
    )}
  </div>
)
