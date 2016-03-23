using System.Collections.Generic;
using Shopin.Models;

namespace Shopin.Services
{
    public interface IProductService
    {
        IEnumerable<Product> GetAll();
    }
}
