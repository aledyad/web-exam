using Microsoft.AspNetCore.Mvc;
using WebApiServer.Models;

namespace WebApiServer.Controllers
{
  /// <summary>
  /// Контроллер маршрута "/test".
  /// </summary>
  [Route("[controller]")]
  [ApiController]
  public class TestController : ControllerBase
  {
    /// <summary>
    /// Получить категории товаров.
    /// </summary>
    /// <returns>Список категорий.</returns>
    [HttpGet("[action]")]
    [ActionName("categories")]
    public List<Category> GetCategories()
    {
      return Category.Repository;
    }

    /// <summary>
    /// Получить товары категории.
    /// </summary>
    /// <param name="categoryName">Имя категории.</param>
    /// <returns>Список товаров.</returns>
    [HttpGet("[action]/{categoryName}")]
    [ActionName("products")]
    public List<Product> GetProducts(string categoryName)
    {
      var category = Category.Repository.Single(c => c.Name.Equals(categoryName, StringComparison.OrdinalIgnoreCase));
      return Product.Repository.Where(p => p.Category == category).ToList();
    }

    /// <summary>
    /// Получить товары в корзине.
    /// </summary>
    /// <returns>Список товаров.</returns>
    [HttpGet("[action]")]
    [ActionName("basket")]
    public List<Product> GetBacketProducts()
    {
      return Basket.Products;
    }

    /// <summary>
    /// Добавить товар в корзину.
    /// </summary>
    /// <param name="productId">Ид товара.</param>
    [HttpPost("[action]/{productId}")]
    [ActionName("basket")]
    public void AddBacketProduct(int productId)
    {
      var product = Product.Repository.Single(p => p.Id == productId);
      Basket.Products.Add(product);
    }

    /// <summary>
    /// Удалить товар из корзины.
    /// </summary>
    /// <param name="productId">Ид товара.</param>
    [HttpDelete("[action]/{productId}")]
    [ActionName("basket")]
    public void DeleteBacketProduct(int productId)
    {
      var product = Product.Repository.Single(p => p.Id == productId);
      Basket.Products.Remove(product);
    }
  }
}
