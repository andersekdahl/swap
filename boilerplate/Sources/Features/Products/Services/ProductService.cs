using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using SwapWeb.Features.Products.Models;

namespace SwapWeb.Features.Products.Services
{
    public class ProductService : IProductService
    {
        public IEnumerable<Product> GetAll() 
        {
            var productsPath = HttpContext.Current.Server.MapPath("~/products.json");
            
            if(File.Exists(productsPath))
            {
                return JsonConvert
                    .DeserializeObject<IEnumerable<Product>>(File.ReadAllText(productsPath));
            }

            return Enumerable.Empty<Product>();
        }
    }
}