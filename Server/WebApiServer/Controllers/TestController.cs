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
  }
}
