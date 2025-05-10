using Microsoft.AspNetCore.Mvc;

namespace Bot_Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InventoryController : ControllerBase
    {
        private static readonly List<Product> Products = new()
        {
            new Product { Id = 1, Name = "Laptop", Quantity = 10, Description = "High-performance laptop" },
            new Product { Id = 2, Name = "Mouse", Quantity = 50, Description = "Wireless mouse" },
            new Product { Id = 3, Name = "Keyboard", Quantity = 30, Description = "Mechanical keyboard" }
        };

        [HttpGet("all")]
        public IEnumerable<Product> GetAllProducts()
        {
            return Products;
        }

        [HttpGet("quantity/{id}")]
        public ActionResult<int> GetProductQuantity(int id)
        {
            var product = Products.FirstOrDefault(p => p.Id == id);
            if (product == null)
                return NotFound("Product not found");
            return product.Quantity;
        }

        [HttpGet("description/{id}")]
        public ActionResult<string> GetProductDescription(int id)
        {
            var product = Products.FirstOrDefault(p => p.Id == id);
            if (product == null)
                return NotFound("Product not found");
            return product.Description;
        }
    }

    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public string Description { get; set; }
    }
}