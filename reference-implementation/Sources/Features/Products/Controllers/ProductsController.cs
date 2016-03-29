using System.Web.Mvc;
using ScopeWeb.Extensions;
using ScopeWeb.Features.Products.Models;
using ScopeWeb.Features.Products.Services;

namespace ScopeWeb.Features.Products.Controllers
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