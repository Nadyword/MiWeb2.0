using Mi_WebApi.Application.Services;
using Mi_WebApi.Domain.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace Mi_WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Testing(IConfiguration configuration) : ControllerBase
    {
        private readonly TestingServices testingServices = new(configuration);

        [HttpGet("Activo")]
        public async Task<IActionResult> IsActive()
        {
            return Ok( await this.testingServices.IsActiveAsync());
        }

        [HttpGet("DataBase")]
        public async Task<IActionResult> IsActiveDataBase([FromBody] RequestDto request)
        {
            return Ok(await this.testingServices.IsActiveDataBaseAsync(request));
        }
    }
}
