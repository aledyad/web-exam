using Microsoft.AspNetCore.Mvc;
using WebApiServer.Models;

namespace WebApiServer.Controllers
{
  [Route("[controller]")]
  [ApiController]
  public class TestController : ControllerBase
  {
    [HttpGet]
    public Entity Get()
    {
      return new Entity() { Id = 1, Name = "TestName" };
    }

    [HttpGet("[action]")]
    [ActionName("categories")]
    public List<Category> GetCategories()
    {
      return Category.Repository;
    }

    [HttpGet("[action]/{categoryName}")]
    [ActionName("products")]
    public List<Product> GetProducts(string categoryName)
    {
      var category = Category.Repository.Single(c => c.Name.Equals(categoryName, StringComparison.OrdinalIgnoreCase));
      return Product.Repository.Where(p => p.Category == category).ToList();
    }

    [HttpGet("[action]")]
    [ActionName("basket")]
    public List<Product> GetBacketProducts()
    {
      return Basket.Products;
    }

    [HttpPost("[action]/{productId}")]
    [ActionName("basket")]
    public void AddBacketProduct(int productId)
    {
      var product = Product.Repository.Single(p => p.Id == productId);
      Basket.Products.Add(product);
    }

    [HttpDelete("[action]/{productId}")]
    [ActionName("basket")]
    public void DeleteBacketProduct(int productId)
    {
      var product = Product.Repository.Single(p => p.Id == productId);
      Basket.Products.Remove(product);
    }
  }
}
