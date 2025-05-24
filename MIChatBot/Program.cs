using Microsoft.AspNetCore.Hosting.StaticWebAssets;
using MIChatBot.Configurations;
using MIChatBot.Components;

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

ConfigureMiddleware(app, port);

// Exception handling
if (!environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
}

app.UseAntiforgery();
app.MapStaticAssets();
app.MapRazorComponents<App>().AddInteractiveServerRenderMode();
app.Run();

#region Metodos auxiliares

void ConfigureServices(IServiceCollection services, string envName)
{
    services.AddControllers(options =>
    {
        options.Conventions.Insert(0, new RoutePrefixConvention("Api"));
    });
    services.AddEndpointsApiExplorer();
    services.AddRazorComponents().AddInteractiveServerComponents();
}

void ConfigureMiddleware(WebApplication app, string port)
{

    app.Urls.Add($"http://localhost:{port}");
    app.UseAuthorization();
    app.MapControllers();
}

#endregion