using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ScopeWeb.Features.ShoppingCart.Models;

namespace ScopeWeb.ShoppingCart.Services
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
