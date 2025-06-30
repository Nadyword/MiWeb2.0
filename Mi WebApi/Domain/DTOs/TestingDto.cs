using System.ComponentModel.DataAnnotations;

namespace Mi_WebApi.Domain.DTOs
{
    public class TestingDto : RequestDto
    {
        [Required(ErrorMessage = "Tienes que agregar un mensaje.")]
        public required string Mensaje { get; set; }
    }
}
