namespace SwapWeb.Features.Products.Models
{
    public class Product
    {
        public string Category { get; set; }

        public int Id { get; set; }

        public string ImageUrl { get; set; }

        public decimal Price { get; set; }

        public string ShortDescription { get; set; }
    }
}