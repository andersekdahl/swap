using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ScopeWeb.Features.ShoppingCart.Models;

namespace ScopeWeb.ShoppingCart.Services
{
    public interface ICartService
    {
        Cart GetCart();
        void SaveCart(Cart cart);
    }
}
