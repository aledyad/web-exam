var builder = WebApplication.CreateBuilder(args);
builder.Services
  .AddControllers()
  .AddJsonOptions(options =>
  {
    options.JsonSerializerOptions.PropertyNamingPolicy = null;
  });

var app = builder.Build();

app.MapControllers();
app.MapGet("/", () => "Hello! It is Web API server!");

app.Run();
