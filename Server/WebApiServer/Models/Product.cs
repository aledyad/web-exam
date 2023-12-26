namespace WebApiServer.Models
{
  /// <summary>
  /// Товар.
  /// </summary>
  public class Product : Entity
  {
    /// <summary>
    /// Хранилище всех товаров.
    /// </summary>
    public static List<Product> Repository { get; } = new();

    /// <summary>
    /// Цена.
    /// </summary>
    public int Price { get; set; }

    /// <summary>
    /// Ид фотографии.
    /// </summary>
    public string PhotoId { get; set; }

    /// <summary>
    /// Категория.
    /// </summary>
    public Category Category { get; set; }

    /// <summary>
    /// Признак того, что товар находится в корзине.
    /// </summary>
    public bool IsInBasket => Basket.Products.Contains(this);

    /// <summary>
    /// Статический конструктор.
    /// </summary>
    static Product()
    {
      Repository.Add(new Product()
      {
        Id = 1,
        Name = "Product1",
        Price = 45,
        PhotoId = "1.jpg",
        Category = Category.Repository.Skip(1).First()
      });
      Repository.Add(new Product()
      {
        Id = 2,
        Name = "Product2",
        Price = 4665,
        PhotoId = "2.jpg",
        Category = Category.Repository.Skip(2).First()
      });
      Repository.Add(new Product()
      {
        Id = 3,
        Name = "Product3",
        Price = 455,
        PhotoId = "3.jpg",
        Category = Category.Repository.Skip(0).First()
      });
      Repository.Add(new Product()
      {
        Id = 4,
        Name = "Product4",
        Price = 4005,
        PhotoId = "4.jpg",
        Category = Category.Repository.Skip(1).First()
      });
      Repository.Add(new Product()
      {
        Id = 5,
        Name = "Product5",
        Price = 24115,
        PhotoId = "5.jpg",
        Category = Category.Repository.Skip(0).First()
      });
    }
  }
}

