using System.Web.Mvc;
using SwapWeb.Extensions;
using SwapWeb.Features.Products.Models;
using SwapWeb.Features.Products.Services;

namespace SwapWeb.Features.Products.Controllers
{
    public class ProductsController : Controller
    {
        private readonly IProductService _productService;

        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }

        // GET: Products
        [Route("")]
        public ActionResult Index()
        {
            return View();
        }

        [Route("products")]
        public ActionResult GetProducts()
        {
            return this.JsonNet(_productService.GetAll());
        }
    }
}