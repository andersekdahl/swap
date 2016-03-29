using ScopeWeb.Features.Products.Models;

namespace ScopeWeb.Features.ShoppingCart.Models
{
    public class CartItem
    {
        public Product Product { get; set; }

        public int Quantity { get; set; }
    }
}