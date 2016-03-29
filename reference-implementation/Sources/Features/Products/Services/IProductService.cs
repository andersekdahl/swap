using System.Collections.Generic;
using ScopeWeb.Features.Products.Models;

namespace ScopeWeb.Features.Products.Services
{
    public interface IProductService
    {
        IEnumerable<Product> GetAll();
    }
}
