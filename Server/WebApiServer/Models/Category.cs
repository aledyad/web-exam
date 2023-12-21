namespace WebApiServer.Models
{
  public class Category : Entity
  {
    public static List<Category> Repository { get; } = new();

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

