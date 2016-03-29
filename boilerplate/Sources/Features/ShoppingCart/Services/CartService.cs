using ScopeWeb.Features.ShoppingCart.Models;

namespace ScopeWeb.Features.ShoppingCart.Services
{
    public class CartService : ICartService
    {
        private static Cart SharedCart = new Cart();

        public Cart GetCart()
        {
            return SharedCart;
        }

        public void SaveCart(Cart cart)
        {
            SharedCart = cart;
        }
    }
}
