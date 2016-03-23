using System.Collections.Generic;
using SwapWeb.Features.Products.Models;

namespace SwapWeb.Features.Products.Services
{
    public interface IProductService
    {
        IEnumerable<Product> GetAll();
    }
}
