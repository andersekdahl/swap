using System;
using System.Web.Mvc;
using ScopeWeb.Features.Products.Services;
using ScopeWeb.Extensions;
using ScopeWeb.Features.Products.Models;

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
            throw new NotImplementedException();
        }
    }
}