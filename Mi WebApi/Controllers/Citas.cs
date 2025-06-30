using Mi_WebApi.Application.Services;
using Mi_WebApi.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Mi_WebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class Citas(IConfiguration configuration) : Controller
{
    private readonly CitasServices citasServices = new(configuration);

    [HttpPost("Crear")]
    public async Task<IActionResult> CrearCita([FromBody] Cita request)
    {
        return Ok(await this.citasServices.CrearCita(request));        
    }
}