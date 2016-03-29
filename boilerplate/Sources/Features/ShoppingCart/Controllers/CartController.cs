using System;
using System.Web.Mvc;
using ScopeWeb.Features.Products.Services;
using ScopeWeb.Features.ShoppingCart.Models;
using ScopeWeb.Features.ShoppingCart.Services;

namespace ScopeWeb.Features.ShoppingCart.Controllers
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
            throw new NotImplementedException();
        }

        // GET: Cart
        [Route("add")]
        [HttpPost]
        public ActionResult Add(CartProductRequest req)
        {
            throw new NotImplementedException();
        }

        [Route("clear")]
        [HttpPost]
        public ActionResult Clear()
        {
            throw new NotImplementedException();
        }

        [Route("decreasequantity")]
        [HttpPost]
        public ActionResult DecreaseQuantity(CartProductRequest request)
        {
            throw new NotImplementedException();
        }
    }
}