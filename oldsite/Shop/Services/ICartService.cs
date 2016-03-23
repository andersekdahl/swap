namespace Shopin.Services
{
    public interface ICartService
    {
        Models.Cart GetCart();
        void SaveCart(Models.Cart cart);
    }
}
