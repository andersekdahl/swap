using System;
using System.Linq;
using System.Web.Mvc;
using SwapWeb.Extensions;
using SwapWeb.Features.Products.Services;
using SwapWeb.Features.ShoppingCart.Models;
using SwapWeb.ShoppingCart.Services;

namespace SwapWeb.Features.ShoppingCart.Controllers
{
    [RoutePrefix("cart")]
    public class CartController : Controller
    {
        private readonly ICartService _cartService;
        private readonly IProductService _productService;

        public CartController(ICartService cartService, IProductService productService)
        {
            _cartService = cartService;
            _productService = productService;
        }

        [Route("")]
        public ActionResult Index()
        {
            return this.JsonNet(_cartService.GetCart());
        }

        // GET: Cart
        [Route("add")]
        [HttpPost]
        public ActionResult Add(CartProductRequest req)
        {
            var cart = _cartService.GetCart();

            var item = cart.Items.FirstOrDefault(i => i.Product.Id == req.Id);

            if (item == null)
            {
                var product = _productService.GetAll().Single(p => p.Id == req.Id);
                item = new CartItem
                {
                    Product = product,
                    Quantity = 1
                };

                cart.Items.Add(item);
            }
            else
            {
                item.Quantity++;
            }

            _cartService.SaveCart(cart);

            return Index();
        }

        [Route("clear")]
        [HttpPost]
        public ActionResult Clear()
        {
            var cart = _cartService.GetCart();
            cart.Items.Clear();
            _cartService.SaveCart(cart);

            return Index();
        }

        [Route("decreasequantity")]
        [HttpPost]
        public ActionResult DecreaseQuantity(CartProductRequest request)
        {
            var cart = _cartService.GetCart();

            var item = cart.Items.Single(i => i.Product.Id == request.Id);

            item.Quantity--;

            if (item.Quantity == 0)
            {
                cart.Items.Remove(item);
            }

            _cartService.SaveCart(cart);

            return Index();
        }
    }
}