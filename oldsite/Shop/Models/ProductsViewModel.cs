using System.Collections.Generic;

namespace Shopin.Models
{
    public class ProductsViewModel
    {
        public Shopin.Models.Cart Cart { get; set; }

        public IEnumerable<Product> Products { get; set; }
   } 
}