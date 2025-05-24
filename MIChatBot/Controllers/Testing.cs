using Microsoft.AspNetCore.Mvc;
using MIChatBot.Models;
using System.Text.Json;

namespace MIChatBot.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public partial class Testing(IConfiguration config) : ControllerBase
    {
        private readonly IConfiguration _config = config;

        [HttpPost("SaveValue/")]
        public async Task<IActionResult> Pruebas([FromBody] RequestBot<JsonElement> requestBot)
        {

            string clientId = requestBot.ClientId;
            string texto = requestBot.Model.ToString();

            int result = await InsertarPrueba(clientId, texto);

            return Ok(result);
        }

        [HttpGet("Tas/")]
        public IActionResult Tas()
        {
            return Ok("Si toy");
        }
    }
}