using Microsoft.OpenApi.Models;

#region Variables de clase

var builder = WebApplication.CreateBuilder(args);
var environmentName = builder.Configuration.GetValue<string>("Environment:Name")!;
var port = builder.Configuration.GetValue<string>("Environment:Port")!;      

#endregion

ConfigureServices(builder.Services);

var app = builder.Build();

ConfigureMiddleware(app, environmentName, port);

app.Run();

#region MÉTODOS AUXILIARES

void ConfigureServices(IServiceCollection services)
{
    services.AddControllers();
    services.AddEndpointsApiExplorer();

    if (environmentName.Equals("Development", StringComparison.OrdinalIgnoreCase))
    {
        services.AddSwaggerGen(opt =>
        {
            opt.SwaggerDoc("v1", new OpenApiInfo
            {
                Title = "My API",
                Version = "v1"
            });
        });
    }
}

void ConfigureMiddleware(WebApplication app, string env, string port)
{
    if (env.Equals("Development", StringComparison.OrdinalIgnoreCase))
    {
        app.UseSwagger();
        app.UseSwaggerUI(options =>
        {
            options.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            options.RoutePrefix = string.Empty;
        });
    }
    else
    {
        app.Urls.Add($"http://localhost:{port}");
    }

    app.UseAuthorization();
    app.MapControllers();
}

#endregion