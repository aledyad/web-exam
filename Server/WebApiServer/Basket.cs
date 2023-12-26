using WebApiServer.Models;

namespace WebApiServer
{
  /// <summary>
  /// Корзина.
  /// </summary>
  public static class Basket
  {
    /// <summary>
    /// Продукты в корзине.
    /// </summary>
    public static List<Product> Products { get; } = new();

    /// <summary>
    /// Статический конструктор.
    /// </summary>
    static Basket()
    {
      Products.Add(Product.Repository.First());
    }
  }
}
