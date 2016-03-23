using System.Web.Mvc;
using Shopin.Models;
using Shopin.Services;

namespace Shopin.Controllers
{
    public class ProductsController : Controller
    {
        private readonly IProductService _productService;
        private readonly ICartService _cartService;

        public ProductsController(IProductService productService, ICartService cartService)
        {
            _productService = productService;
            _cartService = cartService;
        }

        // GET: Products
        [Route("")]
        public ActionResult Index()
        {
            return View(new ProductsViewModel 
            {
                Cart = _cartService.GetCart(),
                Products = _productService.GetAll()
            });
        }
    }
}