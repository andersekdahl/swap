using SwapWeb.Features.Products.Models;

namespace SwapWeb.Features.ShoppingCart.Models
{
    public class CartItem
    {
        public Product Product { get; set; }

        public int Quantity { get; set; }
    }
}