WebApplicationBuilder builder = WebApplication.CreateBuilder(args);


builder.WebHost.UseUrls("http://localhost:" + builder.Configuration["Port"] );
builder.Services.AddControllers();

var app = builder.Build();

app.UseAuthorization();
app.MapControllers();
app.Run();
