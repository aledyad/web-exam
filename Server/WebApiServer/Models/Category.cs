namespace WebApiServer.Models
{
  /// <summary>
  /// Категория товаров.
  /// </summary>
  public class Category : Entity
  {
    /// <summary>
    /// Хранилище всех товаров.
    /// </summary>
    public static List<Category> Repository { get; } = new();

    /// <summary>
    /// Статический конструктор.
    /// </summary>
    static Category()
    {
      Repository.Add(new Category()
      { 
        Id = 1000,
        Name = "TVs"
      });
      Repository.Add(new Category()
      {
        Id = 2000,
        Name = "Printers"
      });
      Repository.Add(new Category()
      {
        Id = 3000,
        Name = "Mobile Phones"
      });
    }
  }
}

