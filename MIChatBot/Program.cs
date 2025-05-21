using MIChatBot.Components;
using Microsoft.AspNetCore.Hosting.StaticWebAssets;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

#region Variables de entorno

var configuration = builder.Configuration;
var environment = builder.Environment;
var environmentName = configuration.GetValue<string>("Environment:Name")!;
var port = configuration.GetValue<string>("Environment:Port")!;

#endregion

StaticWebAssetsLoader.UseStaticWebAssets(builder.Environment, builder.Configuration);
ConfigureServices(builder.Services, environmentName);

var app = builder.Build();

ConfigureMiddleware(app, environmentName, port);

// Exception handling
if (!environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
}

// Antiforgery
app.UseAntiforgery();

// Routing and components
app.MapStaticAssets();
app.MapRazorComponents<App>().AddInteractiveServerRenderMode();

app.Run();


#region Metodos auxiliares

void ConfigureServices(IServiceCollection services, string envName)
{
    services.AddControllers();
    services.AddEndpointsApiExplorer();
    services.AddRazorComponents().AddInteractiveServerComponents();

    if (envName.Equals("Development", StringComparison.OrdinalIgnoreCase))
    {
        services.AddSwaggerGen(options =>
        {
            options.SwaggerDoc("v1", new OpenApiInfo
            {
                Title = "My API",
                Version = "v1"
            });
        });
    }
}

void ConfigureMiddleware(WebApplication app, string envName, string port)
{
    if (envName.Equals("Development", StringComparison.OrdinalIgnoreCase))
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
        if (!app.Urls.Contains($"http://localhost:{port}"))
        {
            app.Urls.Add($"http://localhost:{port}");
        }
    }

    app.UseAuthorization();
    app.MapControllers();
}

#endregion