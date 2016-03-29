using ScopeWeb.Features.ShoppingCart.Models;

namespace ScopeWeb.Features.ShoppingCart.Services
{
    public interface ICartService
    {
        Cart GetCart();
        void SaveCart(Cart cart);
    }
}
