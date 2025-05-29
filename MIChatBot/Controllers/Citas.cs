using MIChatBot.Models;
using Microsoft.AspNetCore.Mvc;

namespace MIChatBot.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public partial class Citas(IConfiguration config) : ControllerBase
    {
        readonly IConfiguration _config = config;

        [HttpPost("CreateCita/")]
        public async Task<IActionResult> CreateCita([FromBody] RequestBot<Cita> requestBot)
        {
            int result = await InsertarCita(requestBot);
            return Ok(result);
        }

        [HttpGet("Citas/")]
        public async Task<IActionResult> GatCitas([FromBody] RequestBot<Cita> requestBot)
        {
            int result = await InsertarCita(requestBot);
            return Ok(result);
        }

    }
}
