﻿using WebApiServer.Models;

namespace WebApiServer
{
  public static class Basket
  {
    public static List<Product> Products { get; } = new();

    static Basket()
    {
      Products.Add(Product.Repository.First());
    }
  }
}
