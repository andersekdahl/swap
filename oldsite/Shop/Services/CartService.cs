namespace Shopin.Services
{
    public class CartService : ICartService
    {
        public Models.Cart GetCart()
        {
            var cart = (Models.Cart)System.Web.HttpContext.Current.Session["cart"];

            if(cart != null)
            {
                return cart;
            }

            cart = new Models.Cart();

            System.Web.HttpContext.Current.Session["cart"] = cart;
            
            return cart;
        }

        public void SaveCart(Models.Cart cart)
        {
            System.Web.HttpContext.Current.Session["cart"] = cart;
        }
    }
}
