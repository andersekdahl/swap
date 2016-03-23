using System;
using System.Collections.Generic;
using System.Linq;

namespace SwapWeb.Features.ShoppingCart.Models
{
    public class Cart
    {
        public Cart()
        {
            Items = new List<CartItem>();
        }

        public Guid Id { get; set; }

        public IList<CartItem> Items { get; set; }

        public decimal Total 
        { 
            get
            {
                return this.Items.Sum(item => item.Product.Price * item.Quantity);
            } 
        }
    }
}